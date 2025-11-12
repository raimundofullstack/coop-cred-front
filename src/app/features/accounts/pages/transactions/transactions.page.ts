import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TransactionService } from '../../services/transaction';
import { Transaction } from '../../models/transaction';
import { CommonModule, DatePipe, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-transactions',
  standalone: true,
  templateUrl: './transactions.html',
  imports: [CommonModule, DatePipe, CurrencyPipe],
})
export class TransactionsPage implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private transactionService = inject(TransactionService);

  transactions = signal<Transaction[]>([]);
  loading = signal(true);

  ngOnInit() {
    const accountId = this.route.snapshot.paramMap.get('id');
    if (!accountId) {
      this.router.navigate(['/dashboard']);
      return;
    }

    this.transactionService.getByAccountId(accountId).subscribe({
      next: (data) => {
        this.transactions.set(data);
        this.loading.set(false);
      },
      error: () => this.router.navigate(['/dashboard']),
    });
  }

  goBack() {
    this.router.navigate(['/dashboard']);
  }
}

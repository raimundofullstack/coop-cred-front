import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountListComponent, AccountCardModel } from '../../components/account-list/account-list';
import { AccountService } from '../../services/account';
import { FormsModule } from '@angular/forms';
import { AccountModalComponent } from '../../components/account-modal/account-modal';
import { AuthService } from '../../../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, AccountListComponent, FormsModule, AccountModalComponent],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss'],
})
export class DashboardPage {
  private accountService = inject(AccountService);
  private auth = inject(AuthService);
  private router = inject(Router);
  accounts = signal<AccountCardModel[]>([]);
  loading = signal(true);
  error = signal('');
  showModal = signal(false);

  ngOnInit() {
    this.fetchAccounts();
  }

  fetchAccounts() {
    this.loading.set(true);
    this.accountService.getAccounts().subscribe({
      next: (res) => {
        const accountsWithDateObjects = res.map((account) => ({
          ...account,
          createdAt: new Date(account.createdAt),
        }));
        this.accounts.set(accountsWithDateObjects);
        this.loading.set(false);
      },
      error: (err) => {
        console.error(err);
        this.error.set('Erro ao carregar contas');
        this.loading.set(false);
      },
    });
  }

  openModal() {
    this.showModal.set(true);
  }

  handleConfirm(goal: string) {
    this.showModal.set(false);

    this.accountService
      .createAccount({ goalDescription: goal, accountType: 'POUPANCA' })
      .subscribe(() => this.fetchAccounts());
  }

  handleCancel() {
    this.showModal.set(false);
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/auth/login']);
  }
  // onCreateSavings() {
  //   this.accountService.createAccount({ accountType: 'POUPANCA' }).subscribe({
  //     next: (newAccount) => {
  //       const accountWithDateObject = {
  //         ...newAccount,
  //         createdAt: new Date(newAccount.createdAt),
  //       };
  //       this.accounts.set([...this.accounts(), accountWithDateObject]);
  //     },
  //     error: (err) => {
  //       console.error(err);
  //       this.error.set('Erro ao criar conta poupança');
  //     },
  //   });
  // }
}

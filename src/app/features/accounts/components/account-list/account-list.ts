import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountCardComponent, AccountCardModel } from '../account-card/account-card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-list',
  standalone: true,
  imports: [CommonModule, AccountCardComponent],
  templateUrl: './account-list.html',
  styleUrls: ['./account-list.scss'],
})
export class AccountListComponent {
  @Input() accounts: AccountCardModel[] = [];
  private router = inject(Router);

  viewTransactions(id: string) {
    this.router.navigate(['/transactions', id]);
  }
}
export type { AccountCardModel };

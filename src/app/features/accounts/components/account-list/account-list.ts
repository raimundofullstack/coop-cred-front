import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountCardComponent, AccountCardModel } from '../account-card/account-card';

@Component({
  selector: 'app-account-list',
  standalone: true,
  imports: [CommonModule, AccountCardComponent],
  templateUrl: './account-list.html',
  styleUrls: ['./account-list.scss'],
})
export class AccountListComponent {
  @Input() accounts: AccountCardModel[] = [];
}
export type { AccountCardModel };

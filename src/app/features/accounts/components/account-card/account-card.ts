import { Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface AccountCardModel {
  accountType: 'CORRENTE' | 'POUPANCA';
  balance: number;
  creditLimit: number;
  goalDescription?: string;
  createdAt: Date;
}

@Component({
  selector: 'app-account-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './account-card.html',
  styleUrls: ['./account-card.scss'],
})
export class AccountCardComponent {
  @Input() account!: AccountCardModel;

  readonly formattedBalance = signal('0,00');
  readonly labels = {
    CORRENTE: 'Conta Corrente',
    POUPANCA: 'Conta Poupança',
  };

  ngOnChanges() {
    if (this.account) {
      this.formattedBalance.set(
        this.account.balance.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
      );
    }
  }
}

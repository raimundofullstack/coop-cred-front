export interface Transaction {
  _id: string;
  fromAccount?: { _id: string; accountType: string };
  toAccount?: { _id: string; accountType: string };
  type: 'DEPOSITO' | 'SAQUE' | 'TRANSFERENCIA';
  amount: number;
  createdAt: string;
}

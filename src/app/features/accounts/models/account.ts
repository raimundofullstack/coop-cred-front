export interface IAccount {
  _id: string; // id da conta no MongoDB
  userId: string;
  balance: number;
  creditLimit: number;
  accountType: 'CORRENTE' | 'POUPANCA';
  goalDescription?: string;
  createdAt: string; // pode ser Date, mas JSON do backend vem como string
  updatedAt: string;
}

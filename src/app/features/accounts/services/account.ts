import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { IAccount } from '../models/account';

@Injectable({ providedIn: 'root' })
export class AccountService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/accounts`;

  getAccounts(): Observable<IAccount[]> {
    return this.http.get<IAccount[]>(this.apiUrl);
  }

  createAccount(payload: {
    goalDescription?: string;
    accountType: 'CORRENTE' | 'POUPANCA';
  }): Observable<IAccount> {
    return this.http.post<IAccount>(this.apiUrl, payload);
  }
}

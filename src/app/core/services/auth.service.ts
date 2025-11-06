import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/users`;
  private TOKEN_KEY = 'token';

  login(data: { email: string; password: string }) {
    return this.http.post<{ token: string }>(`${this.apiUrl}/login`, data);
  }

  register(data: any) {
    return this.http.post(`${this.apiUrl}/register`, data);
  }
  logout() {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}

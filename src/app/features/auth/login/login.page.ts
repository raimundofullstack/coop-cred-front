import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
})
export class LoginPage {
  email = signal('');
  password = signal('');
  private auth = inject(AuthService);
  private router = inject(Router); // injeta o roteador Angular

  loading = signal(false);
  error = signal('');

  login() {
    this.loading.set(true);
    this.error.set('');
    this.auth.login({ email: this.email(), password: this.password() }).subscribe({
      next: (res) => {
        localStorage.setItem('token', res.token);
        this.loading.set(false);
        // Redirecionar de forma Angular (sem recarregar a página)
        this.router.navigateByUrl('/dashboard');
      },
      error: (err) => {
        console.error(err);
        this.error.set(err?.error?.message || 'Erro ao logar');
        this.loading.set(false);
      },
    });
  }
  goToRegister() {
    this.router.navigate(['/auth/register']);
  }
}

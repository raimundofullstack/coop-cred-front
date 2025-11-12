import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.html',
  styleUrls: ['./register.scss'],
})
export class RegisterPage {
  private auth = inject(AuthService);
  private router = inject(Router);

  // Campos do formulário
  name = '';
  email = '';
  password = '';
  confirmPassword = '';

  // Estados da tela
  loading = signal(false);
  error = signal('');

  //   constructor(private auth: AuthService, private router: Router) {}

  register() {
    if (!this.name) {
      this.error.set('Nome obrigatório');
      return;
    }
    if (!this.email) {
      this.error.set('Email obrigatório');
      return;
    }

    if (this.password !== this.confirmPassword) {
      this.error.set('As senhas não conferem');
      return;
    }

    if (!this.password || !this.confirmPassword) {
      this.error.set('As senhas precisam estar preenchidas');
      return;
    }

    this.loading.set(true);
    this.error.set('');

    this.auth.register({ name: this.name, email: this.email, password: this.password }).subscribe({
      next: () => {
        this.loading.set(false);
        this.router.navigate(['/auth/login']);
      },
      error: (err) => {
        this.loading.set(false);
        this.error.set(err?.error?.message || 'Erro ao criar conta');
      },
    });
  }

  backToLogin() {
    this.router.navigate(['/auth/login']);
  }
}

import { Routes } from '@angular/router';
import { LoginPage } from './features/auth/login/login.page';
import { RegisterPage } from './features/auth/register/register.page';
import { DashboardPage } from './features/accounts/pages/dashboard/dashboard';
import { authGuard } from './core/guards/auth-guard';
import { loginGuard } from './core/guards/login-guard';
import { TransactionsPage } from './features/accounts/pages/transactions/transactions.page';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'auth',
    children: [
      {
        path: 'login',
        component: LoginPage,
        canActivate: [loginGuard], // bloqueia se já logado
      },
      {
        path: 'register',
        component: RegisterPage,
        canActivate: [loginGuard], // bloqueia se já logado
      },
    ],
  },
  {
    path: 'dashboard',
    component: DashboardPage,
    canActivate: [authGuard], // protege se não logado
  },
  { path: 'transactions/:id', component: TransactionsPage, canActivate: [authGuard] },
  { path: '**', redirectTo: 'dashboard' },
];

import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component';
import { DashboardPage } from './features/accounts/pages/dashboard/dashboard';
import { authGuard } from './core/guards/auth-guard';
import { loginGuard } from './core/guards/login-guard';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'auth/login',
    component: LoginComponent,
    canActivate: [loginGuard], // bloqueia se já logado
  },
  {
    path: 'dashboard',
    component: DashboardPage,
    canActivate: [authGuard], // protege se não logado
  },
  { path: '**', redirectTo: 'dashboard' },
];

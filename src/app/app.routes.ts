import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./features/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'success',
    loadComponent: () => import('./features/success/success.component').then(m=>m.SuccessComponent)
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' }

];

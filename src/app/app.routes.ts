import { Routes } from '@angular/router';
import { Login } from './shared/pages/login/login';

export const routes: Routes = [
  {
    path:'',
    component:Login,
  },
  {
    path: 'main-menu',
    loadChildren: () => import('./Pura-Vida-Yatchs/payments.routes'),

  },
  {
    path: '**',
    redirectTo: '',
  }
];

import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'main-menu',
    loadComponent: () =>
      import('./Payments/main-menu-page/main-menu-page'),
    children: [
      {
        path: 'payments-menu',
        loadComponent: () =>
          import('./Payments/payments-menu-page/payments-menu-page'),
      },
      {
        path: 'schedule-payments',
        loadComponent: () =>
          import('./Payments/schedule-payments-page/schedule-payments-page'),
      },
      {
        path:'**',
        redirectTo: 'payments-menu'
      },
    ],
  },
  {
    path:'**',
    redirectTo: 'main-menu'
  },
];

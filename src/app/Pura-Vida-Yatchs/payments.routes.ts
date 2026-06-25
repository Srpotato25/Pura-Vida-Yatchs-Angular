import { Routes } from "@angular/router";
import { PaymentsLayout } from "./layouts/PaymentsLayout/PaymentsLayout";

export const paymentsRoutes: Routes = [
  {
    path: '',
    component: PaymentsLayout,

    /* import('./Pura-Vida-Yatchs/main-menu-page/main-menu-page'),
    children: [
      {
        path: 'payments-menu',
        loadChildren: () =>
          import('./Pura-Vida-Yatchs/payments-menu-page/payments-menu-page'),
      },
      {
        path: 'schedule-payments',
        loadChildren: () =>
          import('./Pura-Vida-Yatchs/schedule-payments-page/schedule-payments-page'),
      },
    ], */
  },
];

export default paymentsRoutes;

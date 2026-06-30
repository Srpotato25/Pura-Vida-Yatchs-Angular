import { Routes } from "@angular/router";
import { PaymentsLayout } from "./layouts/PaymentsLayout/PaymentsLayout";
import PaymentsMenuPage from "./payments-menu-page/payments-menu-page";
import SchedulePaymentsPage from "./schedule-payments-page/schedule-payments-page";

export const paymentsRoutes: Routes = [
  {
    path: '',
    component: PaymentsLayout,
    children: [
      {
        path: 'payments-menu',
        component: PaymentsMenuPage,
      },
      {
        path: 'schedule-payments',
        component: SchedulePaymentsPage,
      },
      {
        path:'**',
        redirectTo:'payments-menu',
      }
    ],
  },
];

export default paymentsRoutes;

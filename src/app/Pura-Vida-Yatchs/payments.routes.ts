import { Routes } from "@angular/router";
import { PaymentsLayout } from "./layouts/PaymentsLayout/PaymentsLayout";
import { ProductCatalogPage } from "./pages/main-menu-page/product-catalog-page/product-catalog-page";
import { InquiriesPage } from "./pages/main-menu-page/inquiries-page/inquiries-page";
import { GeneralReportsPage } from "./pages/main-menu-page/general-reports-page/general-reports-page";
import { EmailNotificationsPage } from "./pages/main-menu-page/email-notifications-page/email-notifications-page";
import { HelpPage } from "./pages/main-menu-page/help-page/help-page";
import MainMenuPage from "./pages/main-menu-page/main-menu-page";
import { PurchasesPage } from "./pages/main-menu-page/purchases-page/purchases-page";
import PaymentsMenuPage from "./pages/main-menu-page/product-catalog-page/payments-menu-page/payments-menu-page";
import SchedulePaymentsPage from "./pages/main-menu-page/product-catalog-page/payments-menu-page/schedule-payments-page/schedule-payments-page";

export const paymentsRoutes: Routes = [
  {
    path: '',
    component: PaymentsLayout,
    children: [
      {
        path: 'main-menu',
        component: MainMenuPage,
      },
      {
        path: 'payments-menu',
        component: PaymentsMenuPage,
      },
      {
        path: 'schedule-payments',
        component: SchedulePaymentsPage,
      },
      {
        path: 'product-catalog-page',
        component: ProductCatalogPage,
      },
      {
        path: 'purchases-page',
        component: PurchasesPage,
      },
      {
        path: 'inquiries-page',
        component: InquiriesPage,
      },
      {
        path: 'general-reports-page',
        component: GeneralReportsPage,
      },
      {
        path: 'email-notifications-page',
        component: EmailNotificationsPage,
      },
      {
        path: 'help-page',
        component: HelpPage,
      },
      {
        path:'**',
        redirectTo:'main-menu', // Redirige a la página principal si no se encuentra la ruta
      }
    ],
  },
];

export default paymentsRoutes;

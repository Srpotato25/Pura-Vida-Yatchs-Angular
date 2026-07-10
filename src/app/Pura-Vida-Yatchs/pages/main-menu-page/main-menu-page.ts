import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'main-menu-page',
  imports: [RouterOutlet],
  templateUrl: './main-menu-page.html'
})
export default class MainMenuPage {
  ProductCatalogClicked() {
    // Navigate to the product catalog page when the button is clicked
    window.location.href = '/main-menu/product-catalog-page';
  }
  PurchasesClicked() {
    // Navigate to the purchases page when the button is clicked
    window.location.href = '/main-menu/purchases-page';
  }
  InquiriesClicked() {
    // Navigate to the inquiries page when the button is clicked
    window.location.href = '/main-menu/inquiries-page';
  }
  GeneralReportsClicked() {
    // Navigate to the general reports page when the button is clicked
    window.location.href = '/main-menu/general-reports-page';
  }
  EmailnotificationsClicked() {
    // Navigate to the email notifications page when the button is clicked
    window.location.href = '/main-menu/email-notifications-page';
  }
  HelpClicked() {
    // Navigate to the help page when the button is clicked
    window.location.href = '/main-menu/help-page';
  }
}

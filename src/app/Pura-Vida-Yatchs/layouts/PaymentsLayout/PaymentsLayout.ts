import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import MainMenuPage from "../../pages/main-menu-page/main-menu-page";
import { TopMenu } from "../../components/top-menu/top-menu";
import { FooterPayments } from '../../components/footer/footer';

@Component({
  selector: 'app-payments-layout',
  imports: [RouterOutlet, MainMenuPage, TopMenu, FooterPayments],
  templateUrl: './PaymentsLayout.html',
  styleUrl: './PaymentsLayout.css',
})
export class PaymentsLayout {}

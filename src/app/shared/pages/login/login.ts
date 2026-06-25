import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService, datosLogin } from '../../../auth/AuthService';

@Component({
  selector: 'login',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  datosLogin = inject(AuthService);
  datos = signal<datosLogin[]>([]);
  email = '';
  password = '';

  LoginClicked(){

  }

}

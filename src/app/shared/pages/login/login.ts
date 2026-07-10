import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService, datosLogin } from '../../../auth/AuthService';

@Component({
  selector: 'login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  datosLogin = inject(AuthService);
  datos = signal<datosLogin[]>([]);
  email = '';
  password = '';

  LoginClicked() {
    this.datosLogin.LoginResponse(this.email, this.password).subscribe({
      next: (response) => {
        if (response) {
          this.datos.set([response]);
          console.log('Login successful:', response);
          // Navigate to the main menu page after successful login
          window.location.href = '/main-menu';
        } else {
          console.log('Login failed: No data returned');
        }
      },
      error: (error) => {
        console.error('Login error:', error);
      }
    });
  }
}

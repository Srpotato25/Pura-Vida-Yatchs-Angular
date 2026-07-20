import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of, throwError } from 'rxjs';
import { environment } from '../../environments/environment';

export interface datosDelUsuario {
  p_nombre: string;
  p_email: string;
  p_password: string;
  p_telefono: string;
 }
export interface datosLogin {
  p_email: string;
  p_password: string;
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private http = inject(HttpClient);

  Register(nombre: string, email: string, telefono:string, password: string) {

    const body: datosDelUsuario = {
      p_nombre: nombre,
      p_email: email,
      p_password: password,
      p_telefono: telefono
    }
  return this.http.post(`${environment.supabaseUrl}/rest/v1/rpc/registrar`, body).pipe(
      map(() => true),                    // Si responde OK → retorna true
      catchError(error => {
        console.error('Error al registrar:', error);
        return of(false);                 // Si falla → retorna false
      })
    );
  }
  LoginResponse(email:string, password: string): Observable<datosLogin | null> {

    const body = { p_email: email, p_password: password };

    return this.http.post<datosLogin[]>(`${environment.supabaseUrl}/rest/v1/rpc/login`, body).pipe(
      map(results => results?.[0] ?? null),
      catchError(error => throwError(() => error))
    );
  }
}


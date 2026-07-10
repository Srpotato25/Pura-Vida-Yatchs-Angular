import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { Producto, ProductoJson } from '../Pura-Vida-Yatchs/interfaces/producto';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private http = inject(HttpClient);

  getProductosAsync(): Observable<Producto[]> {
    return this.http.get<ProductoJson[]>(`${environment.supabaseUrl}/rest/v1/productos?select=*`).pipe(
      map((products) => products.map((product) => Producto.fromJson(product))),
      catchError((error) => {
        console.error('Error al cargar los productos:', error);
        return of([]);
      })
    );
  }

  getProductoByIdAsync(id: number): Observable<Producto | null> {
    return this.http.get<ProductoJson[]>(`${environment.supabaseUrl}/rest/v1/productos?Id=eq.${id}&select=*`).pipe(
      map((products) => (products[0] ? Producto.fromJson(products[0]) : null)),
      catchError((error) => {
        console.error('Error al cargar el producto:', error);
        return of(null);
      })
    );
  }
}

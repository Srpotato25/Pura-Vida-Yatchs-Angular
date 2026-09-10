import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Producto, ProductoJson } from '../interfaces/producto';
import { environment } from '../../../environments/environment';
import { catchError, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CompraService {
  private http = inject(HttpClient);
  productos = signal<Producto[]>([]);

  /* RegistrarCompra(){
    return this.http.get<ProductoJson[]>(`${environment.supabaseUrl}/rest/v1/compras`)
  } */

  GetComprasConSaldoByClienteAsync(clienteId: number): Observable<Producto[]>{
    return this.http.get<ProductoJson[]>(`${environment.supabaseUrl}/rest/v1/vw_compra_con_saldo?ClienteId=eq.${clienteId}&select=Id,ClienteId,ProductoId,PrecioTotal,PrimaInicial,PlazoMeses,TasaInteres,Estado,FechaRegistro,SaldoPendiente,productos(Id,Nombre,TipoBien,Marca,PrecioBase)&order=Estado.asc,FechaRegistro.desc"`).pipe(
      map((products) => products.map((product) => Producto.fromJson(product))),
          catchError((error) => {
          console.error('Error al cargar los productos:', error);
          return of([]);
      })
    );
  }

  cargando = signal(false);

  private cargarProductos(): void {
    this.cargando.set(true);

    this.GetComprasConSaldoByClienteAsync.subscribe({
      next: (productos) => {
        this.productos.set(productos);
      },
      error: (error) => {
        console.error(error);
        this.productos.set([]);
      },
      complete: () => {
        this.cargando.set(false);
      }
    });
  }
}

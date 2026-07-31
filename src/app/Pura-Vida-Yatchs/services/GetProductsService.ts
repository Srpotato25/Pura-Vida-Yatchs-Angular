import { inject, Injectable, signal } from '@angular/core';
import { ProductService } from '../../auth/ProductService';
import { Producto } from '../interfaces/producto';

@Injectable({
  providedIn: 'root',
})
export class GetProductsService {
  private readonly productService = inject(ProductService);
  productos = signal<Producto[]>([]);
  cargando = signal(false);

  private cargarProductos(): void {
  this.cargando.set(true);

  this.productService.getProductosAsync().subscribe({
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

  trackByProducto(index: number, producto: Producto): number | null {
    return producto.id ?? index;
  }

  constructor() {
    this.cargarProductos();
  }
}

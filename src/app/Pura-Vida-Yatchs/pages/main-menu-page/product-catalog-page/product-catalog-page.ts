import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ProductService } from '../../../../auth/ProductService';
import { Producto } from '../../../interfaces/producto';

@Component({
  selector: 'product-catalog-page',
  imports: [CommonModule,RouterLink],
  templateUrl: './product-catalog-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCatalogPage implements OnInit {
  private readonly productService = inject(ProductService);
  private readonly router = inject(Router);
  private readonly cdr = inject(ChangeDetectorRef);

  productos: Producto[] = [];
  cargando = false;

  ngOnInit(): void {
    this.cargarProductos();
  }

  private cargarProductos(): void {
    this.cargando = true;
    this.cdr.markForCheck();

    this.productService.getProductosAsync().subscribe({
      next: (productos) => {
        this.productos = productos;
        this.cdr.markForCheck();
      },
      error: (error) => {
        console.error('Error al cargar productos:', error);
        this.productos = [];
        this.cdr.markForCheck();
      },
      complete: () => {
        this.cargando = false;
        this.cdr.markForCheck();
      },
    });
  }

  irAPagos(producto: Producto): void {
    this.router.navigate(['/main-menu/payments-menu'], {
      state: { producto },
    });
  }

  trackByProducto(index: number, producto: Producto): number | null {
    return producto.id ?? index;
  }
}

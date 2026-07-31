import { Component, inject } from '@angular/core';
import { GetProductsService } from '../../services/GetProductsService';
import { Producto } from '../../interfaces/producto';
import { Router } from '@angular/router';

@Component({
  selector: 'products',
  imports: [],
  templateUrl: './products.html'
})
export class Products {
  private readonly router = inject(Router);

  ProductsComponent = inject(GetProductsService);

  irAPagos(producto: Producto): void {
    this.router.navigate(['/main-menu/payments-menu'], {
      state: { producto },
    });
  }
}

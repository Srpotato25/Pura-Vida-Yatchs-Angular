import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Products } from "../../../components/products/products";
import { Router } from '@angular/router';
import { GetProductsService } from '../../../services/GetProducts.Service';
import { Producto } from '../../../interfaces/producto';

@Component({
  selector: 'product-catalog-page',
  imports: [CommonModule, Products],
  templateUrl: './product-catalog-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCatalogPage {
  /* private readonly router = inject(Router);
  ProductsComponent = inject(GetProductsService);

  irAPagos(producto: Producto): void {
    this.router.navigate(['/main-menu/payments-menu'], {
      state: { producto },
    });
  } */
}

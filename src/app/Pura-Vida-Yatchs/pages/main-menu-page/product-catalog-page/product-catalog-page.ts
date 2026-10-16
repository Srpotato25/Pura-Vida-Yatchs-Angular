import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { GetProductsService } from '../../../services/GetProducts.Service';
import { Producto } from '../../../interfaces/producto';

@Component({
  selector: 'product-catalog-page',
  templateUrl: './product-catalog-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCatalogPage {
  private readonly router = inject(Router);
  readonly products = inject(GetProductsService);

  irAPagos(producto: Producto): void {
    this.router.navigate(['/main-menu/payments-menu'], {
      state: { producto },
    });
  }
}

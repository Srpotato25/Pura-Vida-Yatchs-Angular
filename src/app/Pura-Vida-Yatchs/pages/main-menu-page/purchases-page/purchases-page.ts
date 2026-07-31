import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { GetProductsService } from '../../../services/GetProductsService';

@Component({
  selector: 'purchases-page',
  imports: [],
  templateUrl: './purchases-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PurchasesPage {
  ProductosComprados = inject(GetProductsService);
}

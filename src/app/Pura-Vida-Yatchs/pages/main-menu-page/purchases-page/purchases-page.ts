import { Component, inject } from '@angular/core';
import { CompraService } from '../../../services/Compra.service';

@Component({
  selector: 'purchases-page',
  templateUrl: './purchases-page.html'
})
export class PurchasesPage {
  ProductosComprados = inject(CompraService);

}

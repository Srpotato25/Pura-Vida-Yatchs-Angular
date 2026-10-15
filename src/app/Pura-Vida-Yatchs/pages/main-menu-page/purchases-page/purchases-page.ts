import { Component, inject } from '@angular/core';
import { GetProductsService } from '../../../services/GetProducts.Service';
import { Products } from "../../../components/products/products";
import { CompraService } from '../../../services/Compra.service';

@Component({
  selector: 'purchases-page',
  imports: [Products],
  templateUrl: './purchases-page.html'
})
export class PurchasesPage {
  ProductosComprados = inject(CompraService);

}

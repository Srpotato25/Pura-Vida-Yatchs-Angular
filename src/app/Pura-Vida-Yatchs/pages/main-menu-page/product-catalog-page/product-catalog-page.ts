import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Products } from "../../../components/products/products";

@Component({
  selector: 'product-catalog-page',
  imports: [CommonModule, Products],
  templateUrl: './product-catalog-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCatalogPage {

}

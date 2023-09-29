import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Product } from '../../common/product.interface';
import { ProductFacade } from '../../state/product.facade';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent {
  @Input() product!: Product;

  constructor(private readonly productFacade: ProductFacade) {}

  onRemove(product: Product) {
    this.productFacade.removeProduct(product);
  }
}

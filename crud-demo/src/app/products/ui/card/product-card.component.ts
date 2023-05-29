import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Product } from '../../common/product.interface';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent {
  @Input() product: Product | undefined;
}

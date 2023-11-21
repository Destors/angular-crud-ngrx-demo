import { ChangeDetectionStrategy, Input } from '@angular/core';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/products/common/product.interface';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent {
  @Input() products$!: Observable<Product[]>;

  constructor() {}

  trackByFn(index: number, product: Product): number {
    return product.id;
  }
}

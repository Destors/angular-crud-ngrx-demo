import { ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/products/common/product.interface';
import { ProductFacade } from 'src/app/products/state/product.facade';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent {
  products$: Observable<Product[]>;

  constructor(private readonly productFacade: ProductFacade) {
    this.products$ = this.productFacade.products$;
  }

  trackByFn(index: number, product: Product): number {
    return product.id;
  }
}

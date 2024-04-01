import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ProductFacade } from '../state/product.facade';
import { Observable, tap } from 'rxjs';
import { Product } from '../common/product.interface';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsPageComponent implements OnInit {
  products$!: Observable<Product[]>;

  constructor(private productFacade: ProductFacade) {}

  ngOnInit(): void {
    this.productFacade.initDispatch();
    this.products$ = this.productFacade.products$.pipe(
      tap((products: Product[]) => {
        console.log('products recived from fake BE:');
        console.log(products);
      })
    );
  }
}

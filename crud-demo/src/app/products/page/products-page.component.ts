import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { ProductFacade } from '../state/product.facade';
import { Observable, Subject, takeUntil, tap } from 'rxjs';
import { Product } from '../common/product.interface';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsPageComponent implements OnInit, OnDestroy {
  products$!: Observable<Product[]>;
  isLoading$!: Observable<boolean>;

  destroed$ = new Subject();

  constructor(private productFacade: ProductFacade) {}

  ngOnDestroy(): void {
    this.destroed$.next('');
    this.destroed$.complete();
  }

  ngOnInit(): void {
    // store have products ? 'show store' : 'init http get'
    this.productFacade.products$
      .pipe(
        takeUntil(this.destroed$),
        tap((products) => {
          if (products.length) {
            this.products$ = this.productFacade.products$;
          } else {
            this.initProducts();
          }
        })
      )
      .subscribe();
  }

  private initProducts(): void {
    this.isLoading$ = this.productFacade.isLoading$;
    this.productFacade.initDispatch();
    this.products$ = this.productFacade.products$.pipe(
      tap((products: Product[]) => {
        console.group();
        console.log('Product page async observer emitting =>');
        return products.length === 0
          ? console.log('initial state is empty[]')
          : console.table(products);
      })
    );
  }
}

import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Actions } from '@ngrx/effects';
import { ProductsOptActions } from './products-opt.actions';
import { selectProductsOptList } from './products-opt.selectors';
import { Observable } from 'rxjs';
import { Product } from 'src/app/products/common/product.interface';

@Injectable()
export class ProductOptFacade {
  constructor(
    private readonly actions$: Actions,
    private readonly store: Store
  ) {}

  products$: Observable<Product[]> = this.store.pipe(
    select(selectProductsOptList)
  );

  initDispatch(): void {
    this.store.dispatch(ProductsOptActions.loadProductsOpts());
  }
}

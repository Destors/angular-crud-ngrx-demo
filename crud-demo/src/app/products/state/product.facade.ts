import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as ProductActions from './product.actions';
import * as ProductSelectors from './product.selectors';
import { Actions, ofType } from '@ngrx/effects';
import { map } from 'rxjs';
import { Product } from '../common/product.interface';

@Injectable()
export class ProductFacade {
  constructor(
    private readonly actions$: Actions,
    private readonly store: Store
  ) {}

  loaded$ = this.store.select(ProductSelectors.selectLoaded);

  products$ = this.store.select(ProductSelectors.selectProducts);

  productsEntities$ = this.store.select(
    ProductSelectors.selectProductsEntities
  );

  loadSuccess$ = this.actions$.pipe(
    ofType(ProductActions.loadSuccess),
    map(({ products }) => products)
  );

  loadFailure$ = this.actions$.pipe(
    ofType(ProductActions.loadFailure),
    map(({ error }) => error)
  );

  product$ = (id: number) =>
    this.store.select(ProductSelectors.selectProduct(id));

  load(): void {
    this.store.dispatch(ProductActions.load());
  }

  removeProduct(product: Product) {
    this.store.dispatch(ProductActions.removeProduct({ product }));
  }
}

import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';

import * as ProductActions from './product.actions';
import * as ProductSelectors from './product.selectors';
import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { Product } from '../common/product.interface';

@Injectable({ providedIn: 'root' })
export class ProductFacade {
  constructor(
    private readonly actions$: Actions,
    private readonly store: Store
  ) {}

  products$: Observable<Product[]> = this.store.pipe(
    select(ProductSelectors.selectProductsList)
  );

  isLoading$: Observable<boolean> = this.store.pipe(
    select(ProductSelectors.selectProductIsLoading)
  );

  initDispatch(): void {
    this.store.dispatch(ProductActions.GetProducts.init());
  }

  createProduct(product: Product): void {
    this.store.dispatch(
      ProductActions.CreateProduct.init({
        product,
      })
    );
  }

  updateProduct(product: Product): void {
    this.store.dispatch(ProductActions.UpdateProduct.init({ product }));
  }

  deleteProduct(product: Product): void {
    this.store.dispatch(ProductActions.DeleteProduct.init({ product }));
  }
}

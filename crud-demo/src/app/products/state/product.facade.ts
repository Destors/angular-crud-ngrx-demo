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
    this.store.dispatch(ProductActions.GetProducts.getProducts());
  }

  createProduct(product: Product): void {
    this.store.dispatch(
      ProductActions.CreateProduct.createProduct({
        product,
      })
    );
  }

  updateProduct(product: Product): void {
    this.store.dispatch(
      ProductActions.UpdateProduct.updateProduct({ product })
    );
  }

  deleteProduct(product: Product): void {
    this.store.dispatch(
      ProductActions.DeleteProduct.deleteProduct({ product })
    );
  }
}

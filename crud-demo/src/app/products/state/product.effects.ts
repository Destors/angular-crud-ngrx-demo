import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';

import { ProductApiService } from '../api/product-api.service';

import * as ProductActions from './product.actions';

import { Store } from '@ngrx/store';
import { Product } from '../common/product.interface';
import { of } from 'rxjs';

@Injectable()
export class ProductEffects {
  constructor(
    private actions$: Actions,
    private productApiService: ProductApiService,
    private readonly store: Store
  ) {}

  getProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.GetProducts.init),
      switchMap(() => this.productApiService.getProducts()),
      map((products: Product[]) =>
        ProductActions.GetProducts.success({ products })
      )
    )
  );

  createProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.CreateProduct.init),
      switchMap(({ product }) => this.productApiService.create(product)),
      map((products: Product[]) =>
        ProductActions.CreateProduct.success({ products })
      )
    )
  );

  updateproduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.UpdateProduct.init),
      switchMap(({ product }) => this.productApiService.updateProduct(product)),
      map((products: Product[]) =>
        ProductActions.UpdateProduct.success({ products })
      )
    )
  );

  deleteproduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.DeleteProduct.init),
      switchMap(({ product }) =>
        this.productApiService.deleteProductById(product).pipe(
          map((products: Product[]) =>
            ProductActions.DeleteProduct.success({ products })
          ),
          catchError((error) =>
            of(ProductActions.DeleteProduct.failure({ error }))
          )
        )
      )
    )
  );
}

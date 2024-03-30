import { Injectable } from '@angular/core';
import { Actions, OnInitEffects, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import { ProductApiService } from '../api/product-api.service';

import * as ProductActions from './product.actions';

import { Action, Store } from '@ngrx/store';
import { Product } from '../common/product.interface';
import { throwError } from 'rxjs';

@Injectable()
export class ProductEffects {
  constructor(
    private actions$: Actions,
    private productApiService: ProductApiService,
    private readonly store: Store
  ) {}

  getProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.getProducts),
      switchMap(() => this.productApiService.getProducts()),
      map((products: Product[]) =>
        ProductActions.getProductsSuccess({ products })
      )
    )
  );

  createProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.createProduct),
      switchMap(({ product }) => this.productApiService.create(product)),
      map((product: Product) =>
        ProductActions.createProductSuccess({ product })
      )
    )
  );

  updateproduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.updateProduct),
      switchMap(({ product }) => this.productApiService.update(product)),
      map((product: Product) =>
        ProductActions.updateProductSuccess({ product })
      )
    )
  );

  deleteproduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.deleteProduct),
      switchMap(({ product }) =>
        this.productApiService.delete(product.id).pipe(
          map((products: Product[]) =>
            ProductActions.deleteProductSuccess({ products })
          ),
          catchError((e) => throwError(e))
        )
      )
    )
  );
}

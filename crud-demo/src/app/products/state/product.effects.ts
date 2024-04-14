import { Injectable } from '@angular/core';
import { Actions, OnInitEffects, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

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
      map((products: Product[]) =>
        ProductActions.createProductSuccess({ products })
      )
    )
  );

  updateproduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.updateProduct),
      switchMap(({ product }) => this.productApiService.updateProduct(product)),
      map((products: Product[]) =>
        ProductActions.updateProductSuccess({ products })
      )
    )
  );

  deleteproduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.deleteProduct),
      switchMap(({ product }) =>
        this.productApiService.deleteProductById(product).pipe(
          map((products: Product[]) =>
            ProductActions.deleteProductSuccess({ products })
          ),
          catchError((error) =>
            of(ProductActions.deleteProductFailure({ error }))
          )
        )
      )
    )
  );
}

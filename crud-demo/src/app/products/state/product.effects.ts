import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ProductApiService } from '../api/product-api.service';

import * as ProductActions from './product.actions';
import { Action, Store } from '@ngrx/store';

@Injectable()
export class ProductEffects {
  init$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductActions.init),
      concatMap(() =>
        this.productApiService.getAllProducts().pipe(
          map((products) => ProductActions.loadSuccess({ products })),
          catchError((error) => of(ProductActions.loadFailure({ error })))
        )
      )
    );
  });

  load$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductActions.load),
      concatMap(() =>
        this.productApiService.getAllProducts().pipe(
          map((products) => ProductActions.loadSuccess({ products })),
          catchError((error) => of(ProductActions.loadFailure({ error })))
        )
      )
    );
  });

  removeProduct$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductActions.removeProduct),
      switchMap((product) =>
        this.productApiService.removeProduct({ product }).pipe(
          map(() => ProductActions.removeProductSuccess(product)),
          catchError((error) => of(ProductActions.removeProductFailure(error)))
        )
      )
    );
  });

  createProduct$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductActions.createProduct),
      switchMap((product) =>
        this.productApiService.createProduct({ product }).pipe(
          map(() => ProductActions.createproductSuccess(product)),
          catchError((error) => of(ProductActions.createproductFailure(error)))
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private productApiService: ProductApiService,
    private readonly store: Store
  ) {}

  ngrxOnInitEffects(): Action {
    return ProductActions.init();
  }
}

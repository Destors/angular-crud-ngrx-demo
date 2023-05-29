import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ProductApiService } from '../api/product-api.service';

import * as ProductActions from './product.actions';
import { Action } from '@ngrx/store';

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

  constructor(
    private actions$: Actions,
    private productApiService: ProductApiService
  ) {}

  ngrxOnInitEffects(): Action {
    return ProductActions.init();
  }
}

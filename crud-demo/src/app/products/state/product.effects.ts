import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import { ProductActions } from './product.actions';
import { ProductApiService } from '../api/product-api.service';

@Injectable()
export class ProductEffects {
  loadProducts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductActions.loadProducts),
      concatMap(() =>
        this.productApiService.getAllProducts().pipe(
          map((data) => ProductActions.loadProductsSuccess({ data })),
          catchError((error) =>
            of(ProductActions.loadProductsFailure({ error }))
          )
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private productApiService: ProductApiService
  ) {}
}

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import { ProductsActions } from './products.actions';
import { ProductApiService } from '../api/product-api.service';

@Injectable()
export class ProductsEffects {
  loadProductss$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductsActions.loadProductss),
      concatMap(() =>
        this.productApiService.getAllProducts().pipe(
          map((data) => ProductsActions.loadProductssSuccess({ data })),
          catchError((error) =>
            of(ProductsActions.loadProductssFailure({ error }))
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

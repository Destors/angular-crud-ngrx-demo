import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, switchMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import { ProductsOptActions } from './products-opt.actions';
import { ProductApiService } from 'src/app/products/api/product-api.service';
import { Product } from 'src/app/products/common/product.interface';

@Injectable()
export class ProductsOptEffects {
  constructor(
    private actions$: Actions,
    private productApiService: ProductApiService
  ) {}

  loadProductsOpts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductsOptActions.loadProductsOpts),
      concatMap(() => this.productApiService.getProducts()),
      map((products: Product[]) =>
        ProductsOptActions.loadProductsOptsSuccess({ products })
      )
    );
  });
}

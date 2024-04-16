import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, concatMap } from 'rxjs/operators';
import { ProductsApiActions } from './products-opt.actions';
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
      ofType(ProductsApiActions.GET.loadProductsOpts),
      concatMap(() => this.productApiService.getProducts()),
      map((products: Product[]) =>
        ProductsApiActions.GET.loadProductsOptsSuccess({ products })
      )
    );
  });
}

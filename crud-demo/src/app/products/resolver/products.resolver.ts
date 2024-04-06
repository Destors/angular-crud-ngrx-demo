import type { ResolveFn } from '@angular/router';
import { ProductFacade } from '../state/product.facade';
import { inject } from '@angular/core';
import { map, tap } from 'rxjs';

export const productsResolver: ResolveFn<boolean> = (
  route,
  state,
  productsFacade: ProductFacade = inject(ProductFacade)
) => {
  return productsFacade.products$.pipe(
    tap(({ length }) => {
      if (length === 0) {
        productsFacade.initDispatch();
      }
    }),
    map(({ length }) => !!length)
  );
};

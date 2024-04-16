import type { ResolveFn } from '@angular/router';

import { inject } from '@angular/core';
import { map, tap } from 'rxjs';
import { ProductOptFacade } from '../state/product-opt.facade';

export const productsOptResolver: ResolveFn<boolean> = (
  route,
  state,
  productsOptFacade: ProductOptFacade = inject(ProductOptFacade)
) => {
  return productsOptFacade.products$.pipe(
    tap(({ length }) => {
      if (length === 0) {
        productsOptFacade.initDispatch();
      }
    }),
    map(({ length }) => !!length)
  );
};

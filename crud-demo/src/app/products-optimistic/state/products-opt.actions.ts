import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Product } from 'src/app/products/common/product.interface';

export const ProductsOptActions = createActionGroup({
  source: 'productsOpt',
  events: {
    'Load ProductsOpts': emptyProps(),
    'Load ProductsOpts Success': props<{ products: Product[] }>(),
    'Load ProductsOpts Failure': props<{ error: unknown }>(),
  },
});

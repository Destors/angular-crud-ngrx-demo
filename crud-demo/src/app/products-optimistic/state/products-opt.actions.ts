import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Product } from 'src/app/products/common/product.interface';

export namespace ProductsApiActions {
  export const GET = createActionGroup({
    source: 'Products Optimistic',
    events: {
      'Load Products Opts': emptyProps(),
      'Load Products Opts Success': props<{ products: Product[] }>(),
      'Load Products Opts Failure': props<{ error: unknown }>(),
    },
  });
}

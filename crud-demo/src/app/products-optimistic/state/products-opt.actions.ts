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

  export const DELETE = createActionGroup({
    source: 'Products Optimistic',
    events: {
      'Load Products Opts': props<{ products: Product }>(),
      'Load Products Opts Delete Success': props<{ products: Product[] }>(),
      'Load Products Opts Delete Failure': props<{ error: unknown }>(),
    },
  });

  export const UPDATE = createActionGroup({
    source: 'Products Optimistic',
    events: {
      'Load Products Opts': props<{ products: Product }>(),
      'Load Products Opts Patch Success': props<{ products: Product[] }>(),
      'Load Products Opts Patch Failure': props<{ error: unknown }>(),
    },
  });

  export const CREATE = createActionGroup({
    source: 'Products Optimistic',
    events: {
      'Load Products Opts': props<{ products: Product }>(),
      'Load Products Opts Create Success': props<{ products: Product[] }>(),
      'Load Products Opts Create Failure': props<{ error: unknown }>(),
    },
  });
}

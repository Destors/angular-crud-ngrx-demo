import { HttpErrorResponse } from '@angular/common/http';
import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Product } from '../common/product.interface';

export const ProductActions = createActionGroup({
  source: 'Product',
  events: {
    'Load Products': emptyProps(),
    'Load Products Success': props<{ data: Product[] }>(),
    'Load Products Failure': props<{ error: HttpErrorResponse }>(),
  },
});

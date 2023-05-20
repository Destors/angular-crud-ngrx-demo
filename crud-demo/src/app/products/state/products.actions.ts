import { HttpErrorResponse } from '@angular/common/http';
import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Product } from '../common/product.interface';

export const ProductsActions = createActionGroup({
  source: 'Products',
  events: {
    'Load Productss': emptyProps(),
    'Load Productss Success': props<{ data: Product[] }>(),
    'Load Productss Failure': props<{ error: HttpErrorResponse }>(),
  },
});

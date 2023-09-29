import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { Product } from '../common/product.interface';

export enum ProductActions {
  LOAD_PRODUCTS = 'LOAD_PRODUCTS',
  LOAD_PRODUCTS_SUCCESS = 'LOAD_PRODUCTS_SUCCESS',
  ADD_PRODUCT = 'ADD_PRODUCT',
  GET_PRODUCTS = 'GET_PRODUCTS',
  EDIT_PRODUCTS = 'EDIT_PRODUCTS',
  DELETE_PRODUCTS = 'DELETE_PRODUCTS',
}

export const init = createAction('[Product] Init');

export const restore = createAction(
  '[Product] Restore',
  props<{ products: Product[] }>()
);

// load
export const load = createAction('[Product] Load');

export const loadSuccess = createAction(
  '[Product] Load Success',
  props<{ products: Product[] }>()
);

export const loadFailure = createAction(
  '[Product] Load Failure',
  props<{ error: HttpErrorResponse }>()
);

// delete
export const removeProduct = createAction(
  '[Product] Remove Product',
  props<{ product: Product }>()
);

export const removeProductSuccess = createAction(
  '[Product] Remove Product Success',
  props<{ product: Product }>()
);

export const removeProductFailure = createAction(
  '[Product] Remove Product Failure',
  props<{ error: string; product: Product }>()
);

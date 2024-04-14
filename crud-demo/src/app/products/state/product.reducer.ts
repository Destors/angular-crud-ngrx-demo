import { Action, createReducer, on } from '@ngrx/store';
import { ProductState } from '../common/product.interface';

import * as ProductActions from './product.actions';

export const initialProductsState: ProductState = {
  products: [],
  isLoading: false,
  error: null,
};

const reducer = createReducer<ProductState>(
  initialProductsState,
  on(ProductActions.getProducts, (state) => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(ProductActions.getProductsSuccess, (state, { products }) => {
    return {
      ...state,
      isLoading: false,
      products,
    };
  }),
  on(ProductActions.createProduct, (state) => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(ProductActions.createProductSuccess, (state, { products }) => {
    return {
      ...state,
      isLoading: false,
      products,
    };
  }),
  on(ProductActions.updateProduct, (state) => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(ProductActions.updateProductSuccess, (state, { products }) => {
    return {
      ...state,
      isLoading: false,
      products,
    };
  }),
  on(ProductActions.deleteProduct, (state) => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(ProductActions.deleteProductSuccess, (state, { products }) => {
    return {
      ...state,
      isLoading: false,
      products: products,
    };
  }),
  on(ProductActions.deleteProductFailure, (state, { error }) => {
    return {
      ...state,
      isLoading: false,
      error: error,
    };
  })
);

export function productsReducer(
  state = initialProductsState,
  actions: Action
): ProductState {
  return reducer(state, actions);
}

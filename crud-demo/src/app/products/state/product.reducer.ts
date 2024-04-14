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
  on(ProductActions.GetProducts.init, (state) => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(ProductActions.GetProducts.success, (state, { products }) => {
    return {
      ...state,
      isLoading: false,
      products,
    };
  }),
  on(ProductActions.CreateProduct.init, (state) => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(ProductActions.CreateProduct.success, (state, { products }) => {
    return {
      ...state,
      isLoading: false,
      products,
    };
  }),
  on(ProductActions.UpdateProduct.init, (state) => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(ProductActions.UpdateProduct.success, (state, { products }) => {
    return {
      ...state,
      isLoading: false,
      products,
    };
  }),
  on(ProductActions.DeleteProduct.init, (state) => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(ProductActions.DeleteProduct.success, (state, { products }) => {
    return {
      ...state,
      isLoading: false,
      products: products,
    };
  }),
  on(ProductActions.DeleteProduct.failure, (state, { error }) => {
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

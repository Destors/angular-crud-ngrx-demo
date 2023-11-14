import { Action, createReducer, on } from '@ngrx/store';
import { ProductState } from '../common/product.interface';

import * as ProductActions from './product.actions';

export const initialProductsState: ProductState = {
  products: [],
  isLoading: false,
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
  on(ProductActions.createProductSuccess, (state, { product }) => {
    return {
      ...state,
      products: [...state.products, product],
      isLoading: false,
    };
  }),
  on(ProductActions.updateProduct, (state) => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(ProductActions.updateProductSuccess, (state, { product }) => {
    return {
      ...state,
      products: state.products.map((productItem) =>
        productItem.id === product.id ? product : productItem
      ),
      isLoading: false,
    };
  }),
  on(ProductActions.deleteProduct, (state) => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(ProductActions.deleteProductSuccess, (state, { product }) => {
    return {
      ...state,
      isLoading: false,
      products: state.products.filter((b) => b.id !== product.id),
    };
  })
);

export function productsReducer(
  state = initialProductsState,
  actions: Action
): ProductState {
  return reducer(state, actions);
}

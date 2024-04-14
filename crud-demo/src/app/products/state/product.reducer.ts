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
  on(ProductActions.GetProducts.getProducts, (state) => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(ProductActions.GetProducts.getProductsSuccess, (state, { products }) => {
    return {
      ...state,
      isLoading: false,
      products,
    };
  }),
  on(ProductActions.CreateProduct.createProduct, (state) => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(
    ProductActions.CreateProduct.createProductSuccess,
    (state, { products }) => {
      return {
        ...state,
        isLoading: false,
        products,
      };
    }
  ),
  on(ProductActions.UpdateProduct.updateProduct, (state) => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(
    ProductActions.UpdateProduct.updateProductSuccess,
    (state, { products }) => {
      return {
        ...state,
        isLoading: false,
        products,
      };
    }
  ),
  on(ProductActions.DeleteProduct.deleteProduct, (state) => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(
    ProductActions.DeleteProduct.deleteProductSuccess,
    (state, { products }) => {
      return {
        ...state,
        isLoading: false,
        products: products,
      };
    }
  ),
  on(ProductActions.DeleteProduct.deleteProductFailure, (state, { error }) => {
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

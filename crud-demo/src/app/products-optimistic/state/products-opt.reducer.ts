import { Action, createReducer, on } from '@ngrx/store';
import { ProductsOptActions } from './products-opt.actions';
import { ProductState } from 'src/app/products/common/product.interface';
import { initialProductsState } from 'src/app/products/state/product.reducer';

export const productsOptFeatureKey = 'productsOptimistic';

export const reducer = createReducer(
  initialProductsState,
  on(ProductsOptActions.loadProductsOpts, (state) => state),
  on(ProductsOptActions.loadProductsOptsSuccess, (state, { products }) => {
    return {
      ...state,
      isLoading: false,
      products,
    };
  }),
  on(ProductsOptActions.loadProductsOptsFailure, (state, action) => state)
);

export function productsOptReducer(
  state = initialProductsState,
  actions: Action
): ProductState {
  return reducer(state, actions);
}

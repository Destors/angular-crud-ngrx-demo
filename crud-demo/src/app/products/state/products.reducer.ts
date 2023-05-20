import { createFeature, createReducer, on } from '@ngrx/store';
import { ProductsActions } from './products.actions';

export const productsFeatureKey = 'products';

export interface State {

}

export const initialState: State = {

};

export const reducer = createReducer(
  initialState,
  on(ProductsActions.loadProductss, state => state),
  on(ProductsActions.loadProductssSuccess, (state, action) => state),
  on(ProductsActions.loadProductssFailure, (state, action) => state),
);

export const productsFeature = createFeature({
  name: productsFeatureKey,
  reducer,
});


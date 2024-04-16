import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductState } from '../common/product.interface';
import { productsFeatureKey } from './product.reducer';

export const selectProductState =
  createFeatureSelector<ProductState>(productsFeatureKey);

export const selectProductsList = createSelector(
  selectProductState,
  (state) => state?.products
);

export const selectProductIsLoading = createSelector(
  selectProductState,
  (state) => state.isLoading
);

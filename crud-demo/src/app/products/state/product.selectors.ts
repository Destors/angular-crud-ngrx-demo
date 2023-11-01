import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductState } from '../common/product.interface';

export const selectProductState =
  createFeatureSelector<ProductState>('product');
export const selectProductsList = createSelector(
  selectProductState,
  (state) => state.products
);
export const selectProductIsLoading = createSelector(
  selectProductState,
  (state) => state.isLoading
);

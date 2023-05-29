import { createFeatureSelector, createSelector } from '@ngrx/store';

import {
  productFeatureKey,
  productAdapter,
  ProductState,
} from './product.reducer';

export const selectProductState =
  createFeatureSelector<ProductState>(productFeatureKey);

const { selectAll, selectEntities } = productAdapter.getSelectors();

export const selectProducts = createSelector(selectProductState, (state) =>
  selectAll(state)
);

export const selectProductsEntities = createSelector(
  selectProductState,
  (state) => selectEntities(state)
);

export const selectLoaded = createSelector(
  selectProductState,
  (state) => state.loaded
);

export const selectSelectedId = createSelector(
  selectProductState,
  (state) => state.selectedId
);

export const selectSelectedProduct = createSelector(
  selectProductsEntities,
  selectSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : null)
);

export const selectProduct = (id: number) =>
  createSelector(selectProductsEntities, (entities) => entities[id] ?? null);

import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromProductsOpt from './products-opt.reducer';
import { ProductState } from 'src/app/products/common/product.interface';
import { productsOptFeatureKey } from './products-opt.reducer';

export const selectProductsOptState = createFeatureSelector<ProductState>(
  productsOptFeatureKey
);

export const selectProductsOptList = createSelector(
  selectProductsOptState,
  (state) => state?.products
);

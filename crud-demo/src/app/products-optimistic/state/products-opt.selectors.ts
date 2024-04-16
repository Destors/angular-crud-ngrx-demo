import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromProductsOpt from './products-opt.reducer';
import { ProductState } from 'src/app/products/common/product.interface';

export const selectProductsOptState = createFeatureSelector<ProductState>(
  fromProductsOpt.productsOptFeatureKey
);

export const selectProductsOptList = createSelector(
  selectProductsOptState,
  (state) => state?.products
);

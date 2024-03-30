import { createAction, props } from '@ngrx/store';
import { Product } from '../common/product.interface';

const prefix = '[Products]';

export const getProducts = createAction(`${prefix} Get Products`);

export const getProductsSuccess = createAction(
  `${getProducts.type} Success`,
  props<{
    products: Product[];
  }>()
);

export const createProduct = createAction(
  `${prefix} Create Product`,
  props<{
    product: Product;
  }>()
);

export const createProductSuccess = createAction(
  `${createProduct.type} Success`,
  props<{
    product: Product;
  }>()
);

export const updateProduct = createAction(
  `${prefix} Update Product`,
  props<{
    product: Product;
  }>()
);

export const updateProductSuccess = createAction(
  `${updateProduct.type} Success`,
  props<{
    product: Product;
  }>()
);

export const deleteProduct = createAction(
  `${prefix} Delete Product`,
  props<{
    product: Product;
  }>()
);
export const deleteProductSuccess = createAction(
  `${deleteProduct.type} Success`,
  props<{
    products: Product[];
  }>()
);

export const deleteProductFailure = createAction(
  `${deleteProduct.type} Failure`,
  props<{
    products: Product[];
  }>()
);

import { createAction, props } from '@ngrx/store';
import { Product } from '../common/product.interface';

const prefix = '[Products]';

export namespace GetProducts {
  export const init = createAction(`${prefix} Get Products`);

  export const success = createAction(
    `${init.type} Success`,
    props<{
      products: Product[];
    }>()
  );
}

export namespace CreateProduct {
  export const init = createAction(
    `${prefix} Create Product`,
    props<{
      product: Product;
    }>()
  );

  export const success = createAction(
    `${init.type} Success`,
    props<{
      products: Product[];
    }>()
  );
}

export namespace UpdateProduct {
  export const init = createAction(
    `${prefix} Update Product`,
    props<{
      product: Product;
    }>()
  );

  export const success = createAction(
    `${init.type} Success`,
    props<{
      products: Product[];
    }>()
  );
}

export namespace DeleteProduct {
  export const init = createAction(
    `${prefix} Delete Product`,
    props<{
      product: Product;
    }>()
  );
  export const success = createAction(
    `${init.type} Success`,
    props<{
      products: Product[];
    }>()
  );

  export const failure = createAction(
    `${init.type} Failure`,
    props<{
      error: Error | any;
    }>()
  );
}

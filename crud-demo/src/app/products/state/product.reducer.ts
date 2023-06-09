import { Action, createReducer, on } from '@ngrx/store';
import { Product } from '../common/product.interface';
import { EntityAdapter, EntityState, createEntityAdapter } from '@ngrx/entity';

import * as ProductActions from './product.actions';

export const productFeatureKey = 'products';

export interface ProductState extends EntityState<Product> {
  selectedId: number | null;
  loaded: boolean;
}

export interface ProductPartialState {
  readonly [productFeatureKey]: ProductState;
}

export const productAdapter: EntityAdapter<Product> =
  createEntityAdapter<Product>();

export const productInitialState: ProductState = productAdapter.getInitialState(
  {
    selectedId: null,
    loaded: false,
  }
);

const productReducer = createReducer(
  productInitialState,
  on(
    ProductActions.restore,
    (state, { products }): ProductState =>
      productAdapter.upsertMany(products, {
        ...state,
        loaded: true,
      })
  ),
  on(
    ProductActions.loadSuccess,
    (state, { products }): ProductState =>
      productAdapter.setAll(products, {
        ...state,
        loaded: true,
      })
  ),
  on(
    ProductActions.loadFailure,
    (state): ProductState => ({
      ...state,
      loaded: true,
    })
  )
);

export function reducer(
  state: ProductState | undefined,
  action: Action
): ProductState {
  return productReducer(state, action);
}

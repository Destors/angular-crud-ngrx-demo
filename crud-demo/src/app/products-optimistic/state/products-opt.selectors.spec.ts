import * as fromProductsOpt from './products-opt.reducer';
import { selectProductsOptState } from './products-opt.selectors';

describe('ProductsOpt Selectors', () => {
  it('should select the feature state', () => {
    const result = selectProductsOptState({
      [fromProductsOpt.productsOptFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});

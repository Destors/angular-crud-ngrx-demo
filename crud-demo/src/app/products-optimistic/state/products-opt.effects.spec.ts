import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ProductsOptEffects } from './products-opt.effects';

describe('ProductsOptEffects', () => {
  let actions$: Observable<any>;
  let effects: ProductsOptEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ProductsOptEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(ProductsOptEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});

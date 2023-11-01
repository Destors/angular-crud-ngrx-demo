import { APP_INITIALIZER, NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { ProductEffects } from './product.effects';
import { ProductFacade } from './product.facade';

import { ProductApiModule } from '../api/product-api.module';
import { productsReducer } from './product.reducer';

@NgModule({
  imports: [
    ProductApiModule,
    StoreModule.forFeature('product', productsReducer),
    EffectsModule.forFeature([ProductEffects]),
  ],

  providers: [ProductFacade],
})
export class ProductsStateModule {}

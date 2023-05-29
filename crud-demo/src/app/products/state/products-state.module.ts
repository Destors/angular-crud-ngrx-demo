import { APP_INITIALIZER, NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { ProductEffects } from './product.effects';
import { ProductFacade } from './product.facade';
import { productFeatureKey, reducer } from './product.reducer';
import { ProductApiModule } from '../api/product-api.module';

export function metaServiceFactory(productFacade: ProductFacade): () => void {
  return (): void => productFacade.load();
}

@NgModule({
  imports: [
    ProductApiModule,
    StoreModule.forFeature(productFeatureKey, reducer),
    EffectsModule.forFeature([ProductEffects]),
  ],
  providers: [
    ProductFacade,
    {
      provide: APP_INITIALIZER,
      useFactory: metaServiceFactory,
      deps: [ProductFacade],
      multi: true,
    },
  ],
})
export class ProductsStateModule {}

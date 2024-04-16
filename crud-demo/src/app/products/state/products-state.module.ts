import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ProductEffects } from './product.effects';
import { ProductApiModule } from '../api/product-api.module';
import { productsFeatureKey, productsReducer } from './product.reducer';

@NgModule({
  imports: [
    ProductApiModule,
    StoreModule.forFeature(productsFeatureKey, productsReducer),
    EffectsModule.forFeature([ProductEffects]),
  ],
})
export class ProductsStateModule {}

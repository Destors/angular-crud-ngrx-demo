import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { ProductApiModule } from 'src/app/products/api/product-api.module';
import { ProductsOptEffects } from './products-opt.effects';
import { StoreModule } from '@ngrx/store';
import {
  productsOptFeatureKey,
  productsOptReducer,
} from './products-opt.reducer';

@NgModule({
  imports: [
    ProductApiModule,
    StoreModule.forFeature(productsOptFeatureKey, productsOptReducer),
    EffectsModule.forFeature([ProductsOptEffects]),
  ],
})
export class ProductsOptStateModule {}

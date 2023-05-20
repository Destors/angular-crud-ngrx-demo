import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromProduct from './product.reducer';
import { ProductEffects } from './product.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromProduct.productFeatureKey, fromProduct.reducer),
    EffectsModule.forFeature([ProductEffects]),
  ],
})
export class ProductsStateModule {}

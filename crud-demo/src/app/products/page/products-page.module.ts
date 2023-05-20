import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsPageRoutingModule } from './products-page-routing.module';
import { ProductsPageComponent } from './products-page.component';
import { ProductApiModule } from '../api/product-api.module';
import { ProductCardModule } from '../ui/card/product-card.module';

@NgModule({
  declarations: [ProductsPageComponent],
  imports: [
    CommonModule,
    ProductsPageRoutingModule,
    ProductApiModule,
    ProductCardModule,
  ],
})
export class ProductsPageModule {}

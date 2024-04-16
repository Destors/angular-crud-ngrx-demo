import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsPageRoutingModule } from './products-page-routing.module';
import { ProductsPageComponent } from './products-page.component';
import { ProductApiModule } from '../api/product-api.module';
import { ProductListModule } from '../ui/list/product-list.module';

@NgModule({
  declarations: [ProductsPageComponent],
  imports: [
    CommonModule,
    ProductsPageRoutingModule,
    ProductApiModule,
    ProductListModule,
  ],
})
export class ProductsPageModule {}

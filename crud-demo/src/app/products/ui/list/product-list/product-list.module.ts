import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { ProductCardModule } from '../../card/product-card.module';

@NgModule({
  declarations: [ProductListComponent],
  imports: [CommonModule, ProductCardModule],
  exports: [ProductListComponent],
})
export class ProductListModule {}

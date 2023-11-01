import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { EditDialogModule } from '../dialogs/edit/edit-dialog.module';
import { DeleteProductDialogModule } from '../dialogs/delete/delete-product-dialog.module';
import { ProductFacade } from '../../state/product.facade';

@NgModule({
  declarations: [ProductCardComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    EditDialogModule,
    DeleteProductDialogModule,
  ],
  exports: [ProductCardComponent],
  providers: [ProductFacade]
})
export class ProductCardModule {}

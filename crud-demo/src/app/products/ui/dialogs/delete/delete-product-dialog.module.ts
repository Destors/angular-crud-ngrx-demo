import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteProductDialogComponent } from './delete-product-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [DeleteProductDialogComponent],
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  exports: [DeleteProductDialogComponent],
})
export class DeleteProductDialogModule {}

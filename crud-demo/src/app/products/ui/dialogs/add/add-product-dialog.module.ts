import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductDialogComponent } from './add-product-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [AddProductDialogComponent],
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  exports: [AddProductDialogComponent],
})
export class AddDialogModule {}

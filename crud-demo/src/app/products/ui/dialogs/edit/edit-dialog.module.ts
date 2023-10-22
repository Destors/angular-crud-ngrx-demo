import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditDialogComponent } from './edit-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [EditDialogComponent],
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  exports: [EditDialogComponent],
})
export class EditDialogModule {}

import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Product } from '../../common/product.interface';
import { MatDialog } from '@angular/material/dialog';
import { EditDialogComponent } from '../dialogs/edit/edit-dialog.component';
import { DeleteProductDialogComponent } from '../dialogs/delete/delete-product-dialog.component';
import { ProductDialogMode } from '../../common/product.enum';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent {
  @Input() product!: Product;

  constructor(public dialog: MatDialog) {}

  onRemove(product: Product): void {
    this.dialog.open(DeleteProductDialogComponent, {
      data: product,
    });
  }

  onEdit(product: Product): void {
    this.dialog.open(EditDialogComponent, {
      data: {
        mode: ProductDialogMode.Update,
        product,
      },
    });
  }

  onAdd(product: Product): void {
    this.dialog.open(EditDialogComponent, {
      data: {
        mode: ProductDialogMode.Create,
        product,
      },
    });
  }

  testMet(text: string): string {
    return text;
  }
}

import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Product } from '../../common/product.interface';
import { ProductFacade } from '../../state/product.facade';
import { MatDialog } from '@angular/material/dialog';
import { EditDialogComponent } from '../dialogs/edit/edit-dialog.component';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent {
  @Input() product!: Product;

  constructor(
    private readonly productFacade: ProductFacade,
    public dialog: MatDialog
  ) {}

  onRemove(product: Product) {
    this.productFacade.removeProduct(product);
  }

  onEdit(product: Product): void {
    this.dialog.open(EditDialogComponent, {
      data: product,
    });
  }
}

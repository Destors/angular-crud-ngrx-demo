import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from 'src/app/products/common/product.interface';
import { ProductFacade } from 'src/app/products/state/product.facade';

@Component({
  selector: 'app-delete-product-dialog',
  templateUrl: './delete-product-dialog.component.html',
  styleUrls: ['./delete-product-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeleteProductDialogComponent {
  constructor(
    private readonly productFacade: ProductFacade,
    @Inject(MAT_DIALOG_DATA) public data: Product
  ) {}

  onRemove(product: Product) {
    this.productFacade.removeProduct(product);
  }
}

import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {
  ProductDialogMode,
  ProductFields,
} from 'src/app/products/common/product.enum';
import { Product } from 'src/app/products/common/product.interface';
import { ProductFacade } from 'src/app/products/state/product.facade';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditDialogComponent {
  form!: UntypedFormGroup;
  dialogMode: ProductDialogMode;
  productFields = Object.values(ProductFields);

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: { dialogMode: ProductDialogMode; product: Product },
    private dialogRef: MatDialogRef<EditDialogComponent>,
    private readonly productFacade: ProductFacade
  ) {
    this.dialogMode = this.data.dialogMode;
    this.initForm();
  }

  onSubmit(product: Product): void {
    if (this.dialogMode === ProductDialogMode.Create) {
      this.productFacade.createProduct(product);
    } else if (this.dialogMode === ProductDialogMode.Update) {
      const updatedProduct: Product = { ...product, id: this.data.product.id };
      this.productFacade.updateProduct(updatedProduct);
    }
    this.dialogRef.close();
  }

  private initForm(): void {
    this.form = new FormGroup({
      [ProductFields.Title]: new FormControl(null, [Validators.required]),
      [ProductFields.Desctiption]: new FormControl(null, [Validators.required]),
      [ProductFields.Price]: new FormControl(null, [Validators.required]),
      [ProductFields.Type]: new FormControl(null, [Validators.required]),
    });

    if (this.dialogMode === ProductDialogMode.Update) {
      this.form.patchValue({ ...this.data.product });
    }
  }
}

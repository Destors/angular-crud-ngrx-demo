import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
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
  mode: ProductDialogMode;
  productFields = Object.values(ProductFields);

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: { mode: ProductDialogMode; product: Product },
    private readonly productFacade: ProductFacade
  ) {
    this.mode = this.data.mode;
    this.initForm();
  }

  onSubmit(product: Product): void {
    if (this.mode === ProductDialogMode.Create) {
      const productWithId = { ...product, id: Date.now() };
      this.productFacade.createProduct(productWithId);
    } else if (this.mode === ProductDialogMode.Update) {
      this.productFacade.updateProduct(product);
    }
  }

  private initForm(): void {
    this.form = new FormGroup({
      [ProductFields.Title]: new FormControl(null, [Validators.required]),
      [ProductFields.Desctiption]: new FormControl(null, [Validators.required]),
      [ProductFields.Price]: new FormControl(null, [Validators.required]),
      [ProductFields.Type]: new FormControl(null, [Validators.required]),
    });

    if (this.mode === ProductDialogMode.Update) {
      this.form.patchValue({ ...this.data.product });
    }
  }
}

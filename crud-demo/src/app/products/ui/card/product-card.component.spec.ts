import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductCardComponent } from './product-card.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ProductListModule } from '../list/product-list.module';
import { HttpClientModule } from '@angular/common/http';
import { ProductDialogMode } from '../../common/product.enum';
import { PRODUCTS_RESPONSE_STUB } from '../../common/product.stub';
import { DeleteProductDialogComponent } from '../dialogs/delete/delete-product-dialog.component';
import { EditDialogComponent } from '../dialogs/edit/edit-dialog.component';

describe('ProductCardComponent', () => {
  let component: ProductCardComponent;
  let fixture: ComponentFixture<ProductCardComponent>;
  let dialog: MatDialog;

  const productStub = PRODUCTS_RESPONSE_STUB[0];

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductCardComponent],
      imports: [
        HttpClientModule,
        MatDialogModule,
        MatCardModule,
        MatIconModule,
        ProductListModule,
      ],
      providers: [],
    });
    fixture = TestBed.createComponent(ProductCardComponent);
    component = fixture.componentInstance;
    dialog = TestBed.inject(MatDialog);

    // set input()
    component.product = productStub;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open delete product dialog onRemove()', () => {
    // Spy on the 'open' method of the dialog service
    const openSpy = spyOn(dialog, 'open');

    // Call the onRemove method
    component.onRemove(productStub);

    // Expect the 'open' method to have been called with the correct arguments
    expect(openSpy).toHaveBeenCalledWith(DeleteProductDialogComponent, {
      data: productStub,
    });
  });

  it('should open edit product dialog onEdit()', () => {
    const openSpy = spyOn(dialog, 'open');
    component.onEdit(productStub);

    expect(openSpy).toHaveBeenCalledWith(EditDialogComponent, {
      data: {
        dialogMode: ProductDialogMode.Update,
        product: productStub,
      },
    });
  });

  it('should open add product dialog onAdd()', () => {
    const openSpy = spyOn(dialog, 'open');
    component.onAdd(productStub);

    expect(openSpy).toHaveBeenCalledWith(EditDialogComponent, {
      data: {
        dialogMode: ProductDialogMode.Create,
        product: productStub,
      },
    });
  });
});

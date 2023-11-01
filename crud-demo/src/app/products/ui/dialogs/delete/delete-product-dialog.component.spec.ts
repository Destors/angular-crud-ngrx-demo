import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteProductDialogComponent } from './delete-product-dialog.component';
import { StoreModule } from '@ngrx/store';
import { productsReducer } from 'src/app/products/state/product.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from 'src/app/products/state/product.effects';
import { ProductApiService } from 'src/app/products/api/product-api.service';
import { HttpClientModule } from '@angular/common/http';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';

describe('DeleteProductDialogComponent', () => {
  let component: DeleteProductDialogComponent;
  let fixture: ComponentFixture<DeleteProductDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        MatDialogModule,
        HttpClientModule,
        StoreModule.forRoot({}),
        StoreModule.forFeature('product', productsReducer),
        EffectsModule.forRoot([]),
        EffectsModule.forFeature([ProductEffects]),
      ],
      declarations: [DeleteProductDialogComponent],
      providers: [
        ProductApiService,
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
      ],
    });
    fixture = TestBed.createComponent(DeleteProductDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

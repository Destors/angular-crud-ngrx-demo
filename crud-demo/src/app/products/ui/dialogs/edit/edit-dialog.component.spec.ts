import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDialogComponent } from './edit-dialog.component';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { StoreModule } from '@ngrx/store';
import { productsReducer } from 'src/app/products/state/product.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from 'src/app/products/state/product.effects';
import { ProductApiService } from 'src/app/products/api/product-api.service';
import { HttpClientModule } from '@angular/common/http';
import { EditDialogModule } from './edit-dialog.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('EditDialogComponent', () => {
  let component: EditDialogComponent;
  let fixture: ComponentFixture<EditDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditDialogComponent],
      imports: [
        HttpClientModule,
        MatDialogModule,
        StoreModule.forRoot({}),
        StoreModule.forFeature('product', productsReducer),
        EffectsModule.forRoot([]),
        EffectsModule.forFeature([ProductEffects]),
        EditDialogModule,
        NoopAnimationsModule,
      ],
      providers: [
        ProductApiService,
        { provide: MAT_DIALOG_DATA, useValue: { product: { title: 'test ' } } },
        { provide: MatDialogRef, useValue: {} },
      ],
    });
    fixture = TestBed.createComponent(EditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

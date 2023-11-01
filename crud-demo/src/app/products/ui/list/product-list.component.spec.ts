import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListComponent } from './product-list.component';
import { StoreModule } from '@ngrx/store';
import { productsReducer } from '../../state/product.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from '../../state/product.effects';
import { ProductApiService } from '../../api/product-api.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductCardModule } from '../card/product-card.module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ProductCardModule,
        HttpClientModule,
        StoreModule.forRoot({}),
        StoreModule.forFeature('product', productsReducer),
        EffectsModule.forRoot([]),
        EffectsModule.forFeature([ProductEffects]),
      ],
      declarations: [ProductListComponent],
      providers: [
        ProductApiService,
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
      ],
    });
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

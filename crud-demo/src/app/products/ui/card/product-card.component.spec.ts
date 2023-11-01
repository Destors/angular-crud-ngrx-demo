import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductCardComponent } from './product-card.component';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ProductListModule } from '../list/product-list.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { productsReducer } from '../../state/product.reducer';
import { ProductEffects } from '../../state/product.effects';
import { ProductApiService } from '../../api/product-api.service';
import { HttpClientModule } from '@angular/common/http';

describe('ProductCardComponent', () => {
  let component: ProductCardComponent;
  let fixture: ComponentFixture<ProductCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductCardComponent],
      imports: [
        HttpClientModule,
        MatDialogModule,
        MatCardModule,
        MatIconModule,
        ProductListModule,
        StoreModule.forRoot({}),
        StoreModule.forFeature('product', productsReducer),
        EffectsModule.forRoot([]),
        EffectsModule.forFeature([ProductEffects]),
      ],
      providers: [
        ProductApiService,
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
      ],
    });
    fixture = TestBed.createComponent(ProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

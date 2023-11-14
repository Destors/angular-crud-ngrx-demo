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
import { ProductType } from '../../common/product.enum';

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
        { provide: MAT_DIALOG_DATA, useValue: { product: { title: 'test ' } } },
        { provide: MatDialogRef, useValue: {} },
      ],
    });
    fixture = TestBed.createComponent(ProductCardComponent);
    component = fixture.componentInstance;

    const expectedProduct = {
      id: Math.floor(Math.random() * 1000),
      title: 'Apple Iphone 15 pro max',
      price: 2500,
      type: ProductType.device,
      desctiption:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat sapiente veritatis omnis mollitia harum placeat quam aspernatur, maxime ea perspiciatis!',
    };

    component.product = expectedProduct;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

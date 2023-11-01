import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsPageComponent } from './products-page.component';
import { StoreModule } from '@ngrx/store';
import { productsReducer } from '../state/product.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from '../state/product.effects';
import { ProductApiService } from '../api/product-api.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductListModule } from '../ui/list/product-list.module';

describe('ProductsPageComponent', () => {
  let component: ProductsPageComponent;
  let fixture: ComponentFixture<ProductsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        ProductListModule,
        StoreModule.forRoot({}),
        StoreModule.forFeature('product', productsReducer),
        EffectsModule.forRoot([]),
        EffectsModule.forFeature([ProductEffects]),
      ],
      declarations: [ProductsPageComponent],
      providers: [ProductApiService],
    });
    fixture = TestBed.createComponent(ProductsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

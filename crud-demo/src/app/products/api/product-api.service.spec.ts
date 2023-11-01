import { TestBed } from '@angular/core/testing';

import { ProductApiService } from './product-api.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { productsReducer } from '../state/product.reducer';
import { ProductEffects } from '../state/product.effects';
import { EffectsModule } from '@ngrx/effects';
import { BrowserModule } from '@angular/platform-browser';

describe('ProductApiService', () => {
  let service: ProductApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        HttpClientModule,
        StoreModule.forRoot({}),
        StoreModule.forFeature('product', productsReducer),
        EffectsModule.forRoot([]),
        EffectsModule.forFeature([ProductEffects]),
      ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
        ProductApiService,
        HttpClient,
      ],
    });
    service = TestBed.inject(ProductApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

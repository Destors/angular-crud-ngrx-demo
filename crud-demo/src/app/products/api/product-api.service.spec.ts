import { TestBed } from '@angular/core/testing';

import { ProductApiService } from './product-api.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';

describe('ProductApiService', () => {
  let service: ProductApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
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

import { TestBed } from '@angular/core/testing';
import { ProductApiService } from './product-api.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { BrowserModule } from '@angular/platform-browser';
import { PRODUCTS_RESPONSE_STUB } from '../common/product.stub';

describe('ProductApiService', () => {
  let service: ProductApiService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BrowserModule, HttpClientTestingModule],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
        ProductApiService,
      ],
    });

    service = TestBed.inject(ProductApiService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should pass http get', () => {
    const testData = PRODUCTS_RESPONSE_STUB;

    // Make an HTTP GET request
    service.getProducts().subscribe((data) =>
      // When observable resolves, result should match test data
      expect(data).toEqual(testData)
    );

    // The following `expectOne()` will match the request's URL.
    // If no requests or multiple requests matched that URL
    // `expectOne()` would throw.
    const req = httpTestingController.expectOne('api/products');

    // Assert that the request is a GET.
    expect(req.request.method).toEqual('GET');

    // Respond with mock data, causing Observable to resolve.
    // Subscribe callback asserts that correct data was returned.
    req.flush(testData);
  });
});

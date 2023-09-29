import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Product } from '../common/product.interface';
import { ProductApiHelper } from './product-api.helper';

@Injectable()
export class ProductApiService {
  constructor(private httpClient: HttpClient) {}

  getAllProducts(): Observable<Product[]> {
    const apiUrl = '/assets/data/products.json';
    return this.httpClient
      .get<Product[]>(apiUrl)
      .pipe(map((product) => ProductApiHelper.setProductId(product)));
  }
}

import { Injectable } from '@angular/core';
import { Observable, asyncScheduler, scheduled } from 'rxjs';
import { Product } from '../common/product.interface';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductApiService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    const apiUrl = 'api/products';
    return this.http.get<Product[]>(apiUrl);
  }

  create(product: Product): Observable<Product> {
    return scheduled([product], asyncScheduler);
  }

  update(updateProduct: Product): Observable<Product> {
    return scheduled([updateProduct], asyncScheduler);
  }

  delete(id: number): Observable<Product[]> {
    const apiUrl = `api/products/${id}`;
    return this.http.delete<Product[]>(apiUrl);
  }
}

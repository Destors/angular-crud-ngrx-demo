import { Injectable } from '@angular/core';
import { Observable, asyncScheduler, scheduled, take, tap } from 'rxjs';
import { Product } from '../common/product.interface';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductApiService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    const apiUrl = 'api/products';
    return this.http
      .get<Product[]>(apiUrl)
      .pipe(tap(() => console.log('get product from fake-Be')));
  }

  create(productBody: Product): Observable<Product[]> {
    const apiUrl = 'api/products';
    return this.http
      .post<Product[]>(apiUrl, productBody)
      .pipe(tap(() => console.log('post new product to fake-Be')));
  }

  update(updateProduct: Product): Observable<Product> {
    return scheduled([updateProduct], asyncScheduler);
  }

  deleteProductById(id: number): Observable<Product[]> {
    const apiUrl = `api/products/${id}`;
    return this.http
      .delete<Product[]>(apiUrl)
      .pipe(tap(() => console.log('delete product to fake-Be')));
  }
}

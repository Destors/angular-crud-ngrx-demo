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

  updateProduct(updatedProduct: Product): Observable<Product[]> {
    const apiUrl = `api/products/${updatedProduct.id}`;
    return this.http
      .patch<Product[]>(apiUrl, updatedProduct)
      .pipe(tap(() => console.log('patch new product to fake-Be')));
  }

  deleteProductById(id: number): Observable<Product[]> {
    const apiUrl = `api/products/${id}`;
    return this.http
      .delete<Product[]>(apiUrl)
      .pipe(tap(() => console.log('delete product from fake-Be')));
  }
}

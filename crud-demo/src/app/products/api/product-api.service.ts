import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Product } from '../common/product.interface';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductApiService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    const apiUrl = 'api/products';
    return this.http
      .get<Product[]>(apiUrl)
      .pipe(tap(() => console.log('...HTTP get product from fake-Be')));
  }

  create(productBody: Product): Observable<Product[]> {
    const apiUrl = 'api/products';
    return this.http
      .post<Product[]>(apiUrl, productBody)
      .pipe(tap(() => console.log('...HTTP post new product to fake-Be')));
  }

  updateProduct(updatedProduct: Product): Observable<Product[]> {
    const apiUrl = `api/products`;
    return this.http
      .patch<Product[]>(apiUrl, updatedProduct)
      .pipe(tap(() => console.log('...HTTP patch new product to fake-Be')));
  }

  deleteProductById(productBody: Product): Observable<Product[]> {
    const apiUrl = `api/products`;
    return this.http
      .delete<Product[]>(apiUrl, { body: productBody.id })
      .pipe(tap(() => console.log('...HTTP delete product from fake-Be')));
  }
}

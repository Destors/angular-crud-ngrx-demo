import { Injectable } from '@angular/core';
import { Observable, asyncScheduler, scheduled, tap } from 'rxjs';
import { Product } from '../common/product.interface';
import { productList } from '../common/product.data';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductApiService {
  private productList: Product[] = productList;

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    const apiUrl = 'api/products';
    return this.http.get<Product[]>(apiUrl);
  }

  create(product: Product): Observable<Product> {
    this.productList = [...this.productList, product];
    return scheduled([product], asyncScheduler);
  }

  update(updateProduct: Product): Observable<Product> {
    this.productList.map((product) =>
      product.id === updateProduct.id ? updateProduct : product
    );

    return scheduled([updateProduct], asyncScheduler);
  }

  delete(product: Product): Observable<Product> {
    this.productList = this.productList.filter((b) => b.id !== product.id);
    return scheduled([product], asyncScheduler);
  }
}

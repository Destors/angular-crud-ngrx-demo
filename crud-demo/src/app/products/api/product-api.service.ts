import { Injectable } from '@angular/core';
import { Observable, asyncScheduler, scheduled } from 'rxjs';
import { Product } from '../common/product.interface';
import { productList } from '../common/product.data';

@Injectable()
export class ProductApiService {
  private productList: Product[] = productList;

  constructor() {}

  getProducts(): Observable<Product[]> {
    // using scheduled instead -of()-
    // This deprecation was introduced in RxJS 6.5 and will become breaking with RxJS 8.
    return scheduled([this.productList], asyncScheduler);
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

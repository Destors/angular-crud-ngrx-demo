import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, of } from 'rxjs';
import { Product } from '../common/product.interface';
import { ProductApiHelper } from './product-api.helper';
import { productList } from '../common/product.data';

@Injectable()
export class ProductApiService {
  private productList: Product[] = productList;

  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return of(this.productList);
  }

  create(product: Product): Observable<Product> {
    this.productList = [...this.productList, product];

    return of(product);
  }

  update(updateProduct: Product): Observable<Product> {
    this.productList.map((product) =>
      product.id === updateProduct.id ? updateProduct : product
    );

    return of(updateProduct);
  }

  delete(product: Product): Observable<Product> {
    this.productList = this.productList.filter((b) => b.id !== product.id);
    return of(product);
  }
}

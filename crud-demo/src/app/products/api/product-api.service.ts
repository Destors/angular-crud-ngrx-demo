import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../common/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductApiService {
  constructor(private httpClient: HttpClient) {}

  getAllProducts(): Observable<Product[]> {
    const apiUrl = '/assets/data/products.json';
    return this.httpClient.get<Product[]>(apiUrl);
  }
}

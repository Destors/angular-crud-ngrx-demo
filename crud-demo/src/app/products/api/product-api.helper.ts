import { Injectable } from '@angular/core';
import { Product } from '../common/product.interface';

@Injectable()
export class ProductApiHelper {
  static setProductId(product: Product[]): Product[] {
    return product.map((obj, index) => ({
      ...obj,
      id: index + 1,
    }));
  }
}

import { ProductType } from './product.enum';
import { Product } from './product.interface';

export const PRODUCTS_RESPONSE_STUB: Product[] = [
  {
    id: 123123,
    title: 'Apple Iphone 15 pro max',
    price: 2500,
    type: ProductType.device,
    desctiption:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat sapiente veritatis omnis mollitia harum placeat quam aspernatur, maxime ea perspiciatis!',
  },
];

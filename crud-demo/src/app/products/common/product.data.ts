import { ProductType } from './product.enum';
import { Product } from './product.interface';

export const productList: Product[] = [
  {
    // id generetor only for POC.
    id: 1,
    title: 'Apple Iphone 15 pro max',
    price: 2500,
    type: ProductType.Device,
    desctiption:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat sapiente veritatis omnis mollitia harum placeat quam aspernatur, maxime ea perspiciatis!',
  },
  {
    id: 2,
    title: 'Hobbit: Unexpected Journey',
    price: 800,
    type: ProductType.Book,
    desctiption:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat sapiente veritatis omnis mollitia harum placeat quam aspernatur, maxime ea perspiciatis!',
  },
  {
    id: 3,
    title: 'Nike Air Max',
    price: 700,
    type: ProductType.Shoes,
    desctiption:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat sapiente veritatis omnis mollitia harum placeat quam aspernatur, maxime ea perspiciatis!',
  },
];

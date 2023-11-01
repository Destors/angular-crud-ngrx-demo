import { ProductType } from './product.enum';
import { Product } from './product.interface';

export let productList: Product[] = [
  {
    id: Math.floor(Math.random() * 1000),
    title: 'Apple Iphone 15 pro max',
    price: 2500,
    type: ProductType.device,
    desctiption:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat sapiente veritatis omnis mollitia harum placeat quam aspernatur, maxime ea perspiciatis!',
  },
  {
    id: Math.floor(Math.random() * 1000),
    title: 'Hobbit: Unexpected Journey',
    price: 800,
    type: ProductType.book,
    desctiption:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat sapiente veritatis omnis mollitia harum placeat quam aspernatur, maxime ea perspiciatis!',
  },
  {
    id: Math.floor(Math.random() * 1000),
    title: 'Nike Air Max',
    price: 700,
    type: ProductType.shoes,
    desctiption:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat sapiente veritatis omnis mollitia harum placeat quam aspernatur, maxime ea perspiciatis!',
  },
];

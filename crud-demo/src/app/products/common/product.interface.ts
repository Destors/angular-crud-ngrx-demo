import { ProductType } from './product.enum';
export interface Product {
  id: number;
  title: string;
  price: number;
  desctiption: string;
  type: ProductType;
}

export interface ProductState {
  products: Product[];
  isLoading: boolean;
}

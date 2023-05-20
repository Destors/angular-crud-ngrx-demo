import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../common/product.interface';
import { ProductApiService } from '../api/product-api.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss'],
})
export class ProductsPageComponent implements OnInit {
  pruducts$: Observable<Product[]>;

  constructor(private productApiService: ProductApiService) {
    this.pruducts$ = this.productApiService.getAllProducts();
  }

  ngOnInit() {
    this.pruducts$.subscribe((val) => console.log(val));
  }
}

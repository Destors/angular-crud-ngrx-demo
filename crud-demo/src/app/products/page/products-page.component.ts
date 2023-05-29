import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../common/product.interface';
import { ProductApiService } from '../api/product-api.service';
import { ProductFacade } from '../state/product.facade';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss'],
})
export class ProductsPageComponent implements OnInit {
  pruducts$!: Observable<Product[]>;

  constructor(
    private productApiService: ProductApiService,
    private readonly productFacade: ProductFacade
  ) {}

  ngOnInit() {
    // this.pruducts$.subscribe((val) => console.log(val));
    this.pruducts$ = this.productFacade.products$;
  }
}

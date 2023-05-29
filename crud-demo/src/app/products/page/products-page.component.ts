import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../common/product.interface';
import { ProductFacade } from '../state/product.facade';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss'],
})
export class ProductsPageComponent implements OnInit {
  pruducts$!: Observable<Product[]>;

  constructor(private readonly productFacade: ProductFacade) {}

  ngOnInit() {
    this.pruducts$ = this.productFacade.products$;
  }
}

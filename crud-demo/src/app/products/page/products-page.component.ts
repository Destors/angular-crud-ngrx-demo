import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ProductFacade } from '../state/product.facade';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsPageComponent implements OnInit {
  constructor(private productsFacade: ProductFacade) {}

  ngOnInit(): void {
    // this.productsFacade.initDispatch();
  }
}

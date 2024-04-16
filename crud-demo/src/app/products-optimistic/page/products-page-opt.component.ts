import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ProductsTableOptComponent } from '../ui/table/products-table-opt.component';
import { ProductOptFacade } from '../state/product-opt.facade';
import { Observable } from 'rxjs';
import { Product } from 'src/app/products/common/product.interface';
import { ProductsOptStateModule } from '../state/products-opt-state.module';

@Component({
  selector: 'app-products-page-opt',
  standalone: true,
  templateUrl: './products-page-opt.component.html',
  styleUrls: ['./products-page-opt.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, ProductsTableOptComponent, ProductsOptStateModule],
  providers: [ProductOptFacade],
})
export class ProductsPageOptComponent implements OnInit {
  products$!: Observable<Product[]>;

  constructor(private productsOptFacade: ProductOptFacade) {}
  ngOnInit(): void {
    this.products$ = this.productsOptFacade.products$;
    this.products$.subscribe((v) => console.log(v));
  }
}

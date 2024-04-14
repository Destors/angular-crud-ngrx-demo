import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProductsTableOptComponent } from '../ui/table/products-table-opt.component';

@Component({
  selector: 'app-products-page-opt',
  standalone: true,
  templateUrl: './products-page-opt.component.html',
  styleUrls: ['./products-page-opt.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, ProductsTableOptComponent],
})
export class ProductsPageOptComponent {}

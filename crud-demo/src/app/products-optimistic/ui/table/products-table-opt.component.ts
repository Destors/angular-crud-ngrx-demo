import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-products-table-opt',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products-table-opt.component.html',
  styleUrls: ['./products-table-opt.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsTableOptComponent {}

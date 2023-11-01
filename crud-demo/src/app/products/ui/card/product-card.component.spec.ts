import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardComponent } from './product-card.component';
import { ProductFacade } from '../../state/product.facade';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ProductListModule } from '../list/product-list.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

describe('ProductCardComponent', () => {
  let component: ProductCardComponent;
  let fixture: ComponentFixture<ProductCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductCardComponent],
      imports: [
        MatDialogModule,
        MatCardModule,
        MatIconModule,
        ProductListModule,
        EffectsModule.forRoot([]),
        StoreModule.forRoot({}),
      ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
      ],
    });
    fixture = TestBed.createComponent(ProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should Tom', () => {
    expect(component.testMet('Tom')).toBe('Tom');
  });
});

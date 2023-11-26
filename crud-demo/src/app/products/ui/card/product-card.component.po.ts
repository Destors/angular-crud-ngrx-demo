import { DebugElement } from '@angular/core';
import { PageObject } from 'src/app/core/testing/page.object';

export class ProductCardComponentPo extends PageObject {
  get title(): DebugElement | null {
    return this.getByAutomationId('title');
  }

  get desctiption(): DebugElement | null {
    return this.getByAutomationId('desctiption');
  }

  get price(): DebugElement | null {
    return this.getByAutomationId('price');
  }
}

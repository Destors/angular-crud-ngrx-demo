import { ProductsPageComponent } from './products-page.component';
import { ProductFacade } from '../state/product.facade';
import { Actions } from '@ngrx/effects';
import { of } from 'rxjs';

describe('ProductsPageComponent', () => {
  let component: ProductsPageComponent;
  let productFacade: ProductFacade;

  beforeEach(() => {
    const actionsMock = new Actions(of({ type: 'productAction' }));
    const storeMock = jasmine.createSpyObj('Store', ['dispatch', 'pipe']);

    productFacade = new ProductFacade(actionsMock, storeMock);
    component = new ProductsPageComponent(productFacade);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call initDispatch() and set products$', () => {
    spyOn(productFacade, 'initDispatch');
    component.ngOnInit();

    expect(productFacade.initDispatch).toHaveBeenCalled();
    expect(component.products$).toBe(productFacade.products$);
  });
});

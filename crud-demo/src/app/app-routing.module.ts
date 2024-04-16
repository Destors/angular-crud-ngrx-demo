import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './ui/layout/layout.component';
import { productsResolver } from './products/resolver/products.resolver';
import { ProductFacade } from './products/state/product.facade';
import { productsOptResolver } from './products-optimistic/resolver/products-opt.resolver';
import { ProductOptFacade } from './products-optimistic/state/product-opt.facade';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'products-page-pesimistic',
      },
      {
        path: 'products-page-pesimistic',
        loadChildren: () =>
          import('./products/page/products-page.module').then(
            (m) => m.ProductsPageModule
          ),
        resolve: { productsResolver },
      },
      {
        path: 'products-page-optimistic',
        loadComponent: () =>
          import('./products-optimistic/page/products-page-opt.component').then(
            (m) => m.ProductsPageOptComponent
          ),
        resolve: { productsOptResolver },
      },
      {
        path: 'auth-page',
        loadComponent: () =>
          import('./auth/page/auth-page.component').then(
            (m) => m.AuthPageComponent
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [ProductFacade, ProductOptFacade],
  exports: [RouterModule],
})
export class AppRoutingModule {}

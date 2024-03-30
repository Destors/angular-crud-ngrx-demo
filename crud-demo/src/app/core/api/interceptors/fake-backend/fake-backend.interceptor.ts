import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { productList } from 'src/app/products/common/product.data';
import { Product } from 'src/app/products/common/product.interface';

let products: Product[] = JSON.parse(JSON.stringify(productList));

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const { url, method, headers, body } = request;

    return handleRoute();

    function handleRoute() {
      switch (true) {
        case url.endsWith('api/products') && method === 'GET':
          return getUsers();
        case url.match('api/products') && method === 'POST':
          return createProduct();
        case url.match(/\/products\/\d+$/) && method === 'PUT':
          return updateProduct();
        case url.match(/\/products\/\d+$/) && method === 'DELETE':
          return deleteProduct();
        default:
          // pass through any requests not handled above
          return next.handle(request);
      }
    }

    // route functions

    function getUsers() {
      return ok(products);
    }

    function createProduct() {
      let newProduct = JSON.parse(JSON.stringify(body));

      newProduct.id = products.length
        ? Math.max(...products.map((x) => x.id)) + 1
        : 1;

      const updatedProducts = [...products, newProduct];

      return ok(updatedProducts);
    }

    function updateProduct() {
      let params = body;
      let user = products.find((x) => x.id === idFromUrl());

      return ok();
    }

    function deleteProduct() {
      products = products.filter((x) => x.id !== idFromUrl());

      return ok(products);
    }

    // helper functions

    function ok(body?: any) {
      return of(new HttpResponse({ status: 200, body })).pipe(delay(500)); // delay observable to simulate server api call
    }

    function idFromUrl() {
      const urlParts = url.split('/');
      return parseInt(urlParts[urlParts.length - 1]);
    }
  }
}

export const fakeBackendProvider = {
  // use fake backend in place of Http service for backend-less development
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendInterceptor,
  multi: true,
};

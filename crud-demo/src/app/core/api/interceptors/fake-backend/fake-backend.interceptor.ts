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

let productsDataBase: Product[] = JSON.parse(JSON.stringify(productList));

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
        case url.match(/\/products\/\d+$/) && method === 'PATCH':
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
      return ok(productsDataBase);
    }

    function createProduct() {
      let newProduct = JSON.parse(JSON.stringify(body));

      newProduct.id = productsDataBase.length
        ? Math.max(...productsDataBase.map((x) => x.id)) + 1
        : 1;

      productsDataBase = [...productsDataBase, newProduct];

      return ok(productsDataBase);
    }

    function updateProduct() {
      // TODO make partial update
      productsDataBase = productsDataBase.map((product) =>
        product.id === body.id ? body : product
      );

      return ok(productsDataBase);
    }

    function deleteProduct() {
      productsDataBase = productsDataBase.filter((x) => x.id !== idFromUrl());

      return ok(productsDataBase);
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

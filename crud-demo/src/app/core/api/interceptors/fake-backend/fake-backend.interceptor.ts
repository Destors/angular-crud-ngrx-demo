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

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
  private productsDataBase: Product[] = JSON.parse(JSON.stringify(productList));
  private apiUrl = 'api/products';

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return this.handleRoute(request, next);
  }

  handleRoute(request: HttpRequest<any>, next: HttpHandler) {
    const { url, method, body } = request;
    switch (true) {
      case url.endsWith(this.apiUrl) && method === 'GET':
        return this.getUsers();
      case url.endsWith(this.apiUrl) && method === 'POST':
        return this.createProduct(body);
      case url.endsWith(this.apiUrl) && method === 'PATCH':
        return this.updateProduct(body);
      case url.endsWith(this.apiUrl) && method === 'DELETE':
        return this.deleteProduct(body);
      default:
        // pass through any requests not handled above
        return next.handle(request);
    }
  }

  getUsers(): Observable<HttpResponse<any>> {
    return this.ok(this.productsDataBase);
  }

  createProduct(body: any): Observable<HttpResponse<any>> {
    let newProduct = JSON.parse(JSON.stringify(body));

    newProduct.id = this.productsDataBase.length
      ? Math.max(...this.productsDataBase.map((x) => x.id)) + 1
      : 1;

    this.productsDataBase = [...this.productsDataBase, newProduct];

    return this.ok(this.productsDataBase);
  }

  updateProduct(body: any): Observable<HttpResponse<any>> {
    this.productsDataBase = this.productsDataBase.map((product) =>
      product.id === body.id ? body : product
    );

    return this.ok(this.productsDataBase);
  }

  deleteProduct(body: any): Observable<HttpResponse<any>> {
    this.productsDataBase = this.productsDataBase.filter((x) => x.id !== body);

    return this.ok(this.productsDataBase);
  }

  ok(body?: any) {
    return of(new HttpResponse({ status: 200, body })).pipe(delay(500)); // delay observable to simulate server api call
  }
}

export const fakeBackendProvider = {
  // use fake backend in place of Http service for backend-less development
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendInterceptor,
  multi: true,
};

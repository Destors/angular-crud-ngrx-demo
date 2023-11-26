import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

@Injectable()
export class FakeBackendHttpInterceptor implements HttpInterceptor {
  // default products json path
  private productsJsonPath = 'assets/data/products.json';
  constructor(private http: HttpClient) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return this.handleRequests(req, next);
  }
  /**
   * Handle request's and support with mock data.
   * @param req
   * @param next
   */
  handleRequests(req: HttpRequest<any>, next: HttpHandler): any {
    const { url, method } = req;

    if (url.endsWith('/products') && method === 'GET') {
      req = req.clone({
        url: this.productsJsonPath,
      });
      return next.handle(req).pipe(delay(500));
    }

    if (url.endsWith('/products') && method === 'POST') {
      const { body } = req.clone();
      // assign a new uuid to new employee
      body.id = Math.random();
      return of(new HttpResponse({ status: 200, body })).pipe(delay(500));
    }

    if (url.match(/\/products\/.*/) && method === 'DELETE') {
      const empId = this.getProductId(url);
      return of(new HttpResponse({ status: 200, body: empId })).pipe(
        delay(500)
      );
    }

    // if there is not any matches return default request.
    return next.handle(req);
  }
  /**
   * Get Employee unique uuid from url.
   * @param url
   */
  getProductId(url: any) {
    const urlValues = url.split('/');
    return urlValues[urlValues.length - 1];
  }
}
/**
 * Mock backend provider definition for app.module.ts provider.
 */
export let fakeBackendProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendHttpInterceptor,
  multi: true,
};

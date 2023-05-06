import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductApiService {
  constructor(private httpClient: HttpClient) {}

  load(): Observable<any> {
    const apiUrl = 'https://jsonplaceholder.typicode.com/todos/1';
    return this.httpClient.get(apiUrl);
  }
}

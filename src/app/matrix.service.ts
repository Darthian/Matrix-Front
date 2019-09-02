import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MatrixService {

  constructor(public http: HttpClient) { }

  post<T>(url, resource: string, body: any, headerOptions?: any): Observable<T> {
    const headers = headerOptions ? new HttpHeaders(headerOptions) : null;
    return this.http.post<T>(
      url + resource,
      body,
      { headers }
    );
  }

  get<T>(url, resource: string, headerOptions?: any): Observable<T> {
    const headers = headerOptions ? new HttpHeaders(headerOptions) : null;
    return this.http.get<T>(
      url + resource,
      { headers }
    );
  }
}

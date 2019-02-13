import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class BaseHttpService {

  readonly httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  readonly httpOptions = { headers: this.httpHeaders, withCredentials: true };

  constructor(private http: HttpClient) {
  }

  post(url, request, options = null) {
    return this.http.post(url, request, options || this.httpOptions);
  }
}

import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';
import { HttpClient } from '@angular/common/http';
import { LoginRequest } from '../../model/auth.model';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
  readonly url = environment.serverUrl + '/auth';
  readonly loginUrl = this.url + '/login';
  readonly logoutUrl = this.url + '/logout';

  constructor(
    private router: Router,
    private http: HttpClient
  ) {
  }

  login(loginRequest: LoginRequest): Observable<any> {
    return this.http.post(this.loginUrl, loginRequest);
  }

  logout(): Observable<any> {
    return this.http.get(this.logoutUrl);
  }
}

import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { AuthConfigConsts, AuthHttp } from 'angular2-jwt';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';
import { HttpClient } from '@angular/common/http';
import { LoginRequest } from '../../model/auth.model';


@Injectable()
export class AuthService {
  readonly url = environment.serverUrl + '/auth';
  readonly loginUrl = this.url + '/login';

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
  }

  login(loginRequest: LoginRequest) {
    return this.http.post(this.loginUrl, loginRequest);
  }

  logout() {
    localStorage.removeItem(AuthConfigConsts.DEFAULT_TOKEN_NAME);
    localStorage.removeItem('user');
    this.router.navigate([ '/client/login' ]);
  }

  getMe() {

    return this.http.get(`${environment.serverUrl}auth/me`);
  }

}

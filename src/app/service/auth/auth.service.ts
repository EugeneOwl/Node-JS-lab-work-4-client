import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { AuthConfigConsts } from 'angular2-jwt';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';
import { HttpClient } from '@angular/common/http';
import { LoginRequest } from '../../model/auth.model';
import { BaseHttpService } from '../common/base-http.service';


@Injectable()
export class AuthService extends BaseHttpService {
  readonly url = environment.serverUrl + '/auth';
  readonly loginUrl = this.url + '/login';

  constructor(
    private router: Router,
    http: HttpClient
  ) {
    super(http);
  }

  login(loginRequest: LoginRequest) {
    return this.post(this.loginUrl, loginRequest);
  }

  logout() {
    localStorage.removeItem(AuthConfigConsts.DEFAULT_TOKEN_NAME);
    localStorage.removeItem('user');
    this.router.navigate([ '/client/login' ]);
  }

  getMe() {

    // return this.http.get(`${environment.serverUrl}auth/me`);
  }

}

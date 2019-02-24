import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';
import { LoginRequest } from '../../model/auth.model';
import { SocketService } from '../common/socket.service';
import { SecurityService } from './security.service';

@Injectable()
export class AuthService {
  readonly url = '/auth';
  readonly loginUrl = this.url + '/login';

  constructor(
    private router: Router,
    private socketService: SocketService
  ) {
  }

  login(loginRequest: LoginRequest) {
    this.socketService.socket.emit(this.loginUrl, loginRequest);
  }

  logout() {
    localStorage.setItem(SecurityService.TOKEN_KEY, '');
    this.router.navigate([ '/client/login' ]);
  }
}

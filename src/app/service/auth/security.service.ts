import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { SocketService } from '../common/socket.service';

@Injectable()
export class SecurityService {
  static readonly TOKEN_KEY = 'token';

  readonly url = '/auth';
  readonly isAuthorizedUrl = this.url + '/is-authorized';

  constructor(
    private http: HttpClient,
    private socketService: SocketService
  ) {
  }

  isAuthorized() {
    this.socketService.socket.emit(this.isAuthorizedUrl, {
      token: localStorage.getItem(SecurityService.TOKEN_KEY)
    });
  }
}

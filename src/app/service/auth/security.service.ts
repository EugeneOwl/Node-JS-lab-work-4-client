import { Injectable } from '@angular/core';

@Injectable()
export class SecurityService {

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token') && !!localStorage.getItem('user');
  }
}

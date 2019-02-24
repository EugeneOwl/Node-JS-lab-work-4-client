import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { SecurityService } from '../../../service/auth/security.service';
import { IsAuthorizedResponse } from '../../../model/auth.model';
import { SocketService } from '../../../service/common/socket.service';

@Injectable()
export class LoginLayoutGuard implements CanActivate {

  constructor(
    private securityService: SecurityService,
    private router: Router,
    private socketService: SocketService
  ) {
    this.socketService.socket.on(this.securityService.isAuthorizedUrl, (data: IsAuthorizedResponse) => {
      if (data.authorized) {
        this.router.navigate([ '/client/tasks' ]);
      }
    });
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.securityService.isAuthorized();
    return true;
  }
}

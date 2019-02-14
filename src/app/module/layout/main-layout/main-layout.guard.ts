import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { SecurityService } from '../../../service/auth/security.service';

@Injectable()
export class MainLayoutGuard implements CanActivate {

  constructor(
    private securityService: SecurityService,
    private router: Router
  ) {
  }

  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    const isAuthorized = await this.securityService.isAuthorized();
    console.log('is authorized: ', isAuthorized);

    if (!isAuthorized) {
      this.router.navigate([ '/client/login' ]);

      return false;
    }

    return true;
  }
}

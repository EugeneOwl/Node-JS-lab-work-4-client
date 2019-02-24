import { Component } from '@angular/core';
import { AuthService } from '../../../service/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: [ './main-layout.component.scss' ]
})
export class MainLayoutComponent {

  constructor(
    private router: Router,
    private authService: AuthService
  ) {
  }

  logout(): void {
    this.authService.logout();
  }
}

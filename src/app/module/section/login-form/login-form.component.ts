import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../service/auth/auth.service';
import { AuthConfigConsts } from 'angular2-jwt';
import { LoginRequest } from '../../../model/auth.model';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: [ './login-form.component.scss' ]
})
export class LoginFormComponent {

  model: any = {};
  errorMessage: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {
  }

  login() {
    this.errorMessage = '';
    this.authService.login(this.loginRequest).subscribe(
      success => {
        console.log(success);
        this.router.navigate([ '/client/tasks' ]);
      },
      error => {
        console.error(error);
        this.errorMessage = error.error.message;
      }
    );
  }

  private get loginRequest(): LoginRequest {
    return {
      username: this.model.username,
      password: this.model.password
    };
  }
}

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

  private setErrorMessage(error) {
    this.errorMessage = `${error.status} error occurred.`;
    if (error.status === '401') {
      this.errorMessage += ' Bad credentials.';
    }
    if (error.status === '0') {
      this.errorMessage += ' Server is not running.';
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../service/auth/auth.service';
import { LoginRequest, LoginResponse } from '../../../model/auth.model';
import * as socketIo from 'socket.io-client';
import { SocketService } from '../../../service/common/socket.service';
import { SecurityService } from '../../../service/auth/security.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: [ './login-form.component.scss' ]
})
export class LoginFormComponent implements OnInit {
  private socket = socketIo('http://127.0.0.1:8000');

  model: any = {};
  errorMessage: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private socketService: SocketService
  ) {
  }

  ngOnInit(): void {
    this.socketService.socket.on(this.authService.loginUrl, (data: LoginResponse) => {
      if (data.authorized) {
        localStorage.setItem(SecurityService.TOKEN_KEY, data.token);
        this.router.navigate([ '/client/tasks' ]);
      } else {
        this.errorMessage = data.errorMessage;
      }
    });
  }

  login() {
    this.errorMessage = '';
    this.authService.login(this.loginRequest);
  }

  private get loginRequest(): LoginRequest {
    return {
      username: this.model.username,
      password: this.model.password
    };
  }
}

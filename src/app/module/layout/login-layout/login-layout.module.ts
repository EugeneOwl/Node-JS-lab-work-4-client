import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';
import { LoginLayoutComponent } from './login-layout.component';
import { LoginLayoutRoutingModule } from './login-layout.routing.module';
import { LoginLayoutGuard } from './login-layout.guard';
import { LoginFormModule } from '../../section/login-form/login-form.module';

@NgModule({
  declarations: [
    LoginLayoutComponent
  ],
  imports: [
    LoginLayoutRoutingModule,
    LoginFormModule,

    MatButtonModule
  ],
  exports: [
    LoginLayoutComponent
  ],
  providers: [
    LoginLayoutGuard
  ]
})
export class LoginLayoutModule {
}

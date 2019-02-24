import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskService } from './service/task.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SecurityService } from './service/auth/security.service';
import { AuthService } from './service/auth/auth.service';
import { HttpCredentialsInterceptorService } from './service/auth/http-credentials-interceptor.service';
import { SocketService } from './service/common/socket.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpCredentialsInterceptorService ,
      multi: true
    },
    TaskService,
    AuthService,
    SecurityService,
    SocketService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}

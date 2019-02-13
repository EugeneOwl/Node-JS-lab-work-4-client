import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskService } from './service/task.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SecurityService } from './service/auth/security.service';
import { AuthService } from './service/auth/auth.service';
import { BaseHttpService } from './service/common/base-http.service';

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
    BaseHttpService,
    TaskService,
    AuthService,
    SecurityService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}

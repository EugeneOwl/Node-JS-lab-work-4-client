import { NgModule } from '@angular/core';
import { MainLayoutComponent } from './main-layout.component';
import { MainLayoutRoutingModule } from './main-layout-routing.module';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material';
import { MainLayoutGuard } from './main-layout.guard';

@NgModule({
  declarations: [
    MainLayoutComponent
  ],
  imports: [
    MainLayoutRoutingModule,
    RouterModule,

    MatButtonModule
  ],
  exports: [
    MainLayoutComponent
  ],
  providers: [
    MainLayoutGuard
  ]
})
export class MainLayoutModule {
}

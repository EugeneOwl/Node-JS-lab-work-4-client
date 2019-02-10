import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'client/login',
    pathMatch: 'full'
  },
  {
    path: 'client/login',
    loadChildren: './module/layout/login-layout/login-layout.module#LoginLayoutModule'
  },
  {
    path: 'client/tasks',
    loadChildren: './module/layout/main-layout/main-layout.module#MainLayoutModule'
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}

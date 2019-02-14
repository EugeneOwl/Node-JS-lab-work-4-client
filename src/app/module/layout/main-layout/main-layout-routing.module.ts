import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { MainLayoutComponent } from './main-layout.component';
import { MainLayoutGuard } from './main-layout.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [MainLayoutGuard],
    component: MainLayoutComponent,
    children: [
      {
        path: 'list',
        loadChildren: '../../section/task/task-list/task-list.module#TaskListModule'
      },
      {
        path: 'add',
        loadChildren: '../../section/task/task-edit/task-edit.module#TaskEditModule'
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class MainLayoutRoutingModule {
}

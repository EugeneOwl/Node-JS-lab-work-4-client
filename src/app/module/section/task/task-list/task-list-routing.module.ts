import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { TaskListComponent } from './task-list.component';
import { TaskListResolver } from './task-list.resolver';

const routes: Routes = [
  {
    path: '',
    component: TaskListComponent,
    resolve: {
      tasks: TaskListResolver
    }
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class TaskListRoutingModule {
}

import { TaskListComponent } from './task-list.component';
import { NgModule } from '@angular/core';
import { TaskListRoutingModule } from './task-list-routing.module';
import { MatFormFieldModule, MatInputModule, MatTableModule } from '@angular/material';
import { TaskListResolver } from './task-list.resolver';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TaskListComponent
  ],
  imports: [
    TaskListRoutingModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ],
  exports: [
    TaskListComponent
  ],
  providers: [
    TaskListResolver
  ]
})
export class TaskListModule {
}

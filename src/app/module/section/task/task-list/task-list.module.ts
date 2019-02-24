import { TaskListComponent } from './task-list.component';
import { NgModule } from '@angular/core';
import { TaskListRoutingModule } from './task-list-routing.module';
import { MatCheckboxModule, MatFormFieldModule, MatInputModule, MatTableModule, MatButtonModule } from '@angular/material';
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
    ReactiveFormsModule,
    MatCheckboxModule,
    MatButtonModule
  ],
  exports: [
    TaskListComponent
  ]
})
export class TaskListModule {
}

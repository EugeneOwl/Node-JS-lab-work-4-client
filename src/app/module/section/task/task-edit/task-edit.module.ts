import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatOptionModule, MatSelectModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaskEditComponent } from './task-edit.component';
import { TaskEditRoutingModule } from './task-edit.routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    TaskEditComponent
  ],
  imports: [
    TaskEditRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,

    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatButtonModule,
    MatCardModule
  ],
  exports: [
    TaskEditComponent
  ]
})
export class TaskEditModule {
}

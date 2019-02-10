import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TaskStatusModel } from '../../../../model/task-status.model';
import { TaskService } from '../../../../service/task.service';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: [ './task-edit.component.scss' ]
})
export class TaskEditComponent implements OnInit {

  statuses = [ TaskStatusModel.TODO, TaskStatusModel.IN_PROGRESS, TaskStatusModel.DONE ];

  nameFormControl: FormControl;
  statusFormControl: FormControl;
  file: File;

  taskEditForm: FormGroup;

  constructor(private taskService: TaskService) {
  }

  ngOnInit() {
    this.buildForm();
  }

  onFileSelect(event: any): void {
    this.file = event.target.files[ 0 ] as File;
  }

  onSubmit(): void {
    if (this.taskEditForm.valid) {
      const formData = new FormData();
      formData.append('name', this.nameFormControl.value);
      formData.append('status', this.statusFormControl.value);
      formData.append('file', this.file);

      this.taskService.add(formData).subscribe(
        success => {
          console.log(success);
        },
        error => {
          console.error(error);
        }
      );
    }
  }

  private buildForm(): void {
    this.nameFormControl = new FormControl(null, Validators.required);
    this.statusFormControl = new FormControl(null, Validators.required);

    this.taskEditForm = new FormGroup({
      name: this.nameFormControl,
      status: this.statusFormControl
    });
  }

}

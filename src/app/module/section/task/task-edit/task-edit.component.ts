import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TaskStatusModel } from '../../../../model/task-status.model';
import { TaskService } from '../../../../service/task.service';
import { TaskModel } from '../../../../model/task.model';
import { FileModel } from '../../../../model/file.model';

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
  fileModel: FileModel;

  taskEditForm: FormGroup;

  constructor(private taskService: TaskService) {
  }

  ngOnInit() {
    this.buildForm();
  }

  onFileSelect(event: any): void {
    this.file = event.target.files[ 0 ] as File;
    if (this.file) {
      this.onloadFile();
    }
  }

  onSubmit(): void {
    if (this.taskEditForm.valid) {
      this.taskService.add(this.buildCreateRequest());
      alert('Task create request sent.');
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

  private buildCreateRequest(): TaskModel {
    return {
      name: this.nameFormControl.value,
      status: this.statusFormControl.value,
      file: this.fileModel
    };
  }

  private onloadFile() {
    const fileReader = new FileReader();
    const slice = this.file.slice(0, 100000);

    fileReader.readAsArrayBuffer(slice);
    fileReader.onload = (evt) => {
      const arrayBuffer = fileReader.result;
      this.fileModel = {
        name: this.file.name,
        type: this.file.type,
        size: this.file.size,
        data: arrayBuffer
      };
    };
  }
}

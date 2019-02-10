import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { TaskList } from '../../../../model/task.model';
import { TaskService } from '../../../../service/task.service';

@Injectable()
export class TaskListResolver implements Resolve<Observable<TaskList[]>> {

  constructor(private taskService: TaskService) {
  }

  resolve() {
    return this.taskService.getAll();
  }
}

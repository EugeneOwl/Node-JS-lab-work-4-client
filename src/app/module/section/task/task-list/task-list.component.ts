import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../../../service/task.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';
import { SocketService } from '../../../../service/common/socket.service';
import { TaskList } from '../../../../model/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: [ './task-list.component.scss' ]
})
export class TaskListComponent implements OnInit {

  displayedColumns = [ 'checkbox', 'name', 'status', 'date_created', 'time_created', 'file' ];
  tasks: TaskList[] = [];
  checkedTaskIdentifiers: string[] = [];

  searchFormControl = new FormControl();

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService,
    private socketService: SocketService
  ) {
  }

  ngOnInit() {
    this.socketService.socket.on(this.taskService.url, (data: TaskList[]) => {
      this.tasks = data;
    });
    this.socketService.socket.on(this.taskService.searchUrl, (data: TaskList[]) => {
      this.tasks = data;
    });
    this.taskService.getAll();
  }

  onSearchTasks() {
    const search = this.searchFormControl.value;
    this.taskService.getAllBySearch(search);
  }

  onDeleteTasks() {
    this.taskService.deleteByIdentifiers(this.checkedTaskIdentifiers);
    this.tasks = this.tasks.filter(it => !this.checkedTaskIdentifiers.includes(it._id));
    this.checkedTaskIdentifiers = [];
  }

  check(row: TaskList, event) { // FIXME
    const checked = Boolean(this.checkedTaskIdentifiers.filter(it => it === row._id).length);
    if (checked) {
      this.checkedTaskIdentifiers = this.checkedTaskIdentifiers.filter(it => it !== row._id);
    } else {
      this.checkedTaskIdentifiers.push(row._id);
    }
  }

  get isAnyTaskChecked(): boolean {
    return Boolean(this.checkedTaskIdentifiers.length);
  }
}

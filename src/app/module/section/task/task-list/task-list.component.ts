import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../../../service/task.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: [ './task-list.component.scss' ]
})
export class TaskListComponent implements OnInit {

  displayedColumns = [ 'name', 'status', 'date_created', 'time_created', 'file' ];
  tasks = [];

  searchFormControl = new FormControl();

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService
  ) {
  }

  ngOnInit() {
    this.tasks = this.route.snapshot.data[ 'tasks' ];
  }

  onSearchTasks() {
    const search = this.searchFormControl.value;

    this.taskService.getAllBySearch(search).subscribe(
      success => {
        this.tasks = success;
      },
      error => {
        console.error(error);
      }
    );
  }

}

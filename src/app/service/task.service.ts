import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TaskModel, TaskList } from '../model/task.model';
import { SocketService } from './common/socket.service';

@Injectable()
export class TaskService {
  readonly url = '/tasks';
  readonly searchUrl = this.url + '/search';
  readonly addUrl = this.url + '/add';
  readonly deleteUrl = this.url + '/delete';

  constructor(private socketService: SocketService) {
  }

  getAll() {
    this.socketService.socket.emit(this.url, {});
  }

  getAllBySearch(search: string) {
    this.socketService.socket.emit(this.searchUrl, search);
  }

  add(task: TaskModel) {
    this.socketService.socket.emit(this.addUrl, task);
  }

  deleteByIdentifiers(identifiers: string[]) {
    this.socketService.socket.emit(this.deleteUrl, identifiers);
  }
}

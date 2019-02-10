import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { TaskModel, TaskList } from '../model/task.model';

@Injectable()
export class TaskService {
  readonly url = environment.serverUrl + '/tasks';
  readonly searchUrl = this.url + '/search';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<TaskList[]> {
    return this.http.get<TaskList[]>(this.url);
  }

  getAllBySearch(search: string): Observable<TaskList[]> {
    return this.http.get<TaskList[]>(this.searchUrl + '?search=' + search);
  }

  add(task: FormData): Observable<TaskModel> {
    return this.http.post<TaskModel>(this.url, task);
  }
}

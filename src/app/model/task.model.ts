import { FileModel } from './file.model';

export interface TaskModel {
  name: string;
  status: string;
  file: FileModel;
}

export interface TaskList {
  _id: string;
  name: string;
  status: string;
  date_created: string;
  time_created: string;
  file: string;
}

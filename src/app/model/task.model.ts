export interface TaskModel {
  name: string;
  status: string;
  file: File;
}

export interface TaskList {
  name: string;
  status: string;
  date_created: string;
  time_created: string;
  file: string;
}

import {ITask} from './ITask';

export interface ISection {
  _id?: string;
  roomId?: number;
  name?: string;
  tasks?: ITask[];
}

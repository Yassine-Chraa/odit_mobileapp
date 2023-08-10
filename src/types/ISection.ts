import {ITask} from './ITask';

export interface ISection {
  roomId?: number;
  name?: string;
  tasks?: ITask[];
}

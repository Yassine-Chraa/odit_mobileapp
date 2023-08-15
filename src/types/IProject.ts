import {IMember} from './IMember';
import {IRoom} from './IRoom';
import {ITask} from './ITask';

export interface IProject {
  id?: number;
  title?: string;
  description?: string;
  isPublic?: boolean;
  members?: IMember[];
  rooms?: IRoom[];
  tasks?: ITask[];
}

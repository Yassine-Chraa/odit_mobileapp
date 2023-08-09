import {IMember} from './IMember';
import { IRoom } from './IRoom';

export interface IProject {
  id?: number;
  title?: string;
  description?: string;
  isPublic?: boolean;
  members?: Array<IMember>;
  rooms?: Array<IRoom>;
}

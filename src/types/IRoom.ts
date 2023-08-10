import {IRoomMember} from './IRoomMember';

export interface IRoom {
  id?: number;
  projectId?: number;
  name?: string;
  description?: string;
  members?: Array<IRoomMember>;
}

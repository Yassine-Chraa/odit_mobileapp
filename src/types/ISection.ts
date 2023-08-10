import { ITask } from "./ITask";

export interface ISection {
  roomId: string;
  name: string;
  tasks: ITask;
}

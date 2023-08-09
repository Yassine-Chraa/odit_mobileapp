import { ITask } from "../../types/ITask";

export default (
  tasks: Array<ITask> | false = false,
  action: {type: String; payload: ITask | false},
) => {
  switch (action.type) {
    case 'Get tasks':
      return action.payload;
    default:
      return tasks;
  }
};

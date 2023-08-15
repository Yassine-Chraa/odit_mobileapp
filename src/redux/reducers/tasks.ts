import { ITask } from "../../types/ITask";

export default (
  tasks: ITask[] | false = false,
  action: {type: String; payload: ITask[] | false},
) => {
  switch (action.type) {
    case 'Get User Tasks':
      return action.payload;
    default:
      return tasks;
  }
};

import { IProject } from "../../types/IProject";

export default (
  projects: Array<IProject> | false = false,
  action: {type: String; payload: IProject | false},
) => {
  switch (action.type) {
    case 'Get Projects':
      return action.payload;
    default:
      return projects;
  }
};

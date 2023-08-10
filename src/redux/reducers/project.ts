import {IProject} from '../../types/IProject';

export default (
  project: IProject | false = false,
  action: {type: String; payload: IProject | false},
) => {
  switch (action.type) {
    case 'Set Project':
      return action.payload;
    case 'Add Room':
      if (project) {
        return {...project, rooms: [...project.rooms!, action.payload]};
      }
    default:
      return project;
  }
};

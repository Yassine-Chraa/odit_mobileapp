import {ISection} from '../../types/ISection';

export default (
  sections: ISection[] | false = false,
  action: {type: String; payload: ISection[] | false},
) => {
  switch (action.type) {
    case 'Get Sections':
      return action.payload;
    case 'Add Section':
      if (sections) return [...sections, action.payload];
    case 'Add Task':
      if (sections) return [...sections, action.payload];
    default:
      return sections;
  }
};

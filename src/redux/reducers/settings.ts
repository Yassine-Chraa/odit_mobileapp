import ISettings from '../../types/ISettings';

export default (
  settings: ISettings = {darkMode: false},
  action: {type: String; payload: ISettings},
) => {
  switch (action.type) {
    case 'Switch Dark Mode':
      return {...settings, darkMode: action.payload.darkMode};
    default:
      return settings;
  }
};

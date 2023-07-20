import {DefaultTheme} from '@react-navigation/native';

export const lightNavigationTheme = {
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    background: '#FEFEFE',
    //To do : Add navigation colors
  },
};
export const darkNavigationTheme = {
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    background: '#1D0E00',
    //To do : Add navigation colors
  },
};

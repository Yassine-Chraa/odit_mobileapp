import {DefaultTheme} from '@react-navigation/native';

export const lightNavigationTheme = {
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    background: '#FEFEFE',
    card:'#FEFEFE',
  },
};
export const darkNavigationTheme = {
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    background: '#160B00',
    card: 'rgba(255, 255, 255, 0.15)',
  },
};

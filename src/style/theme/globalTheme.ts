import {useSelector} from 'react-redux';
import ISettings from '../../types/ISettings';

const ligthColors = {
  backgroundColor: '#FEFEFE',
  largeTextColor: '#1D0E00',
  primaryTextColor: '#301700',
};
const darkColors = {
  backgroundColor: '#1D0E00',
  largeTextColor: '#EBE8E6',
  primaryTextColor: '#C0B8B0',
};
const fontSizes = {
  h1: 36,
  h2: 32,
  h3: 28,
  h4: 20,
  h5: 16,
  h6: 12,
};

export const getColors = () => {
  const darkMode = useSelector((state: {settings: ISettings}) => state.settings.darkMode);
  return darkMode ? darkColors : ligthColors;
};

export const getFontSize = (size: string) => {
  //@ts-ignore
  return fontSizes[size];
};

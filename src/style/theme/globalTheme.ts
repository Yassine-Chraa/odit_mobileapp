import {useSelector} from 'react-redux';
import ISettings from '../../types/ISettings';

const ligthColors = {
  backgroundColor: '#FEFEFE',
  largeTextColor: '#1D0E00',
  primaryTextColor: '#301700',
  secondaryTextColor: '#695905',
  buttonBackgroundColor: '#FADC3D',
  buttonTextColor: '#1D0E00',
  actionColor: '#B19609',
  additionalInfoColor: '#A2958A',
    bordersColor:'0xFF786554',
  borderColor:'#5D4733'
};
const darkColors = {
  backgroundColor: '#1D0E00',
  largeTextColor: '#EBE8E6',
  primaryTextColor: '#C0B8B0',
  secondaryTextColor: '#FDF1B4',
  buttonBackgroundColor: '#FADC3D',
  buttonTextColor: '#1D0E00',
  actionColor: '#FBE25C',
  additionalInfoColor: '#C0B8B0',
  bordersColor:'0xFF786554',
    borderColor:'#5D4733'
};
const fontSizes = {
  h1: 36,
  h2: 32,
  h3: 28,
  pageTitleSize: 24,
  h4: 20,
  h5: 16,
  h6: 14, //Modified,
};

export const getColors = () => {
  const darkMode = useSelector(
    (state: {settings: ISettings}) => state.settings.darkMode,
  );
  return darkMode ? darkColors : ligthColors;
};

export const getFontSize = (size: string) => {
  //@ts-ignore
  return fontSizes[size];
};

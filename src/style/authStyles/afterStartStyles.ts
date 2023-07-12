import {StyleSheet} from 'react-native';
import authStyles from '.';
import {getFontSize} from '../theme/globalTheme';

const afterStartStyles = StyleSheet.create({
  description: {
    ...authStyles.description,
    marginBottom: 40,
    maxWidth: 270,
  },
  signIn: {
    marginTop: 16, //Modified
    textAlign: 'center',
    fontFamily: 'Nunito-Medium',
    fontSize: getFontSize('h6'),
  },
});

export default afterStartStyles;

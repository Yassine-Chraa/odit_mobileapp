import {StyleSheet} from 'react-native';
import {getFontSize} from '../theme/globalTheme';
import authStyles from '.';

const loginStyle = StyleSheet.create({
  subTitle: {
    fontSize: getFontSize('h4'),
    fontFamily: 'Nunito-SemiBold',
  },
  description: {
    ...authStyles.description,
    marginBottom: 0,
  },
  form:{
    marginTop: 40,
    marginBottom: 40
  }
});

export default loginStyle;

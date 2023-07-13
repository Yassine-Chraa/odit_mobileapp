import {StyleSheet} from 'react-native';
import {getFontSize} from '../theme/globalTheme';
import authStyles from '.';

const loginStyle = StyleSheet.create({
  title: {
    ...authStyles.title,
    marginBottom: 0,
  },
  subTitle: {
    fontSize: getFontSize('h4'),
    fontFamily: 'Nunito-SemiBold',
  },
  formInputs:{
    marginTop: 40,
    marginBottom: 40
  }
});

export default loginStyle;

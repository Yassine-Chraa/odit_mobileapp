import {StyleSheet} from 'react-native';
import { getFontSize } from '../theme/globalTheme';

const authStyles = StyleSheet.create({
  screen: {
    paddingHorizontal: 16,
  },
  authPoster: {
    width: '100%',
  },
  header: {
    marginTop: 56,
    marginBottom: 40,
  },
  title: {
    fontSize: getFontSize('h1'),
    fontFamily: 'Nunito-Bold',
    marginBottom: 32,
    textTransform: 'capitalize'
  },
  bottomText:{
    marginTop: 16, //Modified
    textAlign: 'center',
    fontFamily: 'Nunito-Medium',
    fontSize: getFontSize('h6'),
  }
});

export default authStyles;

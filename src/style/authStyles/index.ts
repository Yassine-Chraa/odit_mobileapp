import {StyleSheet} from 'react-native';
import { getFontSize } from '../theme/globalTheme';

const authStyles = StyleSheet.create({
  screen: {
    paddingHorizontal: 16,
  },
  authPoster: {
    width: '100%',
    marginBottom: 40,
  },
  header: {
    marginTop: 56,
  },
  description: {
    fontSize: getFontSize('h1'),
    fontFamily: 'Nunito-Bold',
    marginBottom: 32,
    textTransform: 'capitalize'
  },
  body:{
    
  }
});

export default authStyles;

import {StyleSheet} from 'react-native';
import authStyles from '.';
import { getFontSize } from '../theme/globalTheme';

const confirmationStyles = StyleSheet.create({
  title: {
    ...authStyles.title,
    marginBottom: 0,
    marginTop: 8
  },
  formInputs: {
    marginTop: 24,
    marginBottom: 24, 
  },
  confirmationContainer:{
    width:'100%'
  },
  confirmationText: {
    fontSize: getFontSize('h6'),
    fontFamily: 'Nunito-Medium',
    textAlign: 'center',
    maxWidth: 240,
    marginLeft:'auto',
    marginRight:'auto',
  }
});

export default confirmationStyles;

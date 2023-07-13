import {StyleSheet} from 'react-native';
import authStyles from '.';

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
});

export default confirmationStyles;

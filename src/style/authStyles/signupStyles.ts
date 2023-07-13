import {StyleSheet} from 'react-native';
import authStyles from '.';

const singupStyle = StyleSheet.create({
  title: {
    ...authStyles.title,
    marginBottom: 0,
    marginTop: -16
  },
  formInputs: {
    marginTop: 24,
    marginBottom: 24,
  },
});

export default singupStyle;

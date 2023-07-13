import {StyleSheet} from 'react-native';
import authStyles from '.';
import {getFontSize} from '../theme/globalTheme';

const afterStartStyles = StyleSheet.create({
  description: {
    ...authStyles.title,
    marginBottom: 40,
    maxWidth: 270,
  },
});

export default afterStartStyles;

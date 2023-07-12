import {StyleSheet} from 'react-native';
import {getFontSize} from '../theme/globalTheme';

const startStyle = StyleSheet.create({
  subTitle: {
    fontSize: getFontSize('h5'),
    fontFamily: 'Nunito-Bold',
    marginBottom: 32,
    paddingTop: -8
  },
});

export default startStyle;

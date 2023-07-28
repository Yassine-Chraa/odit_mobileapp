import {StyleSheet} from 'react-native';
import {getFontSize} from '../theme/globalTheme';

const profileStyles = StyleSheet.create({
  headerTitle: {
    marginBottom: 24,
    fontFamily: 'Nunito-SemiBold',
    fontSize: getFontSize('h4'),
  },
  profile: {
    width: 145,
    height: 145,
    borderRadius: 73,
    marginBottom: 12,
  },
  username: {
    marginBottom: 6,
    textAlign: 'center',
    fontFamily: 'Nunito-SemiBold',
    fontSize: getFontSize('h4'),
  },
  mediumText: {
    fontFamily: 'Nunito-Medium',
    fontSize: getFontSize('h5'),
  },
  SemiBoldText:{
    fontFamily: 'Nunito-SemiBold',
    fontSize: getFontSize('h4'),
  },
  email: {
    textAlign: 'center',
  },
  option: {
    paddingVertical: 12,
  },
  logout:{
    marginTop: 32,
    textAlign: 'center'
  }
});

export default profileStyles;

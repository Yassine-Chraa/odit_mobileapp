import {StyleSheet} from 'react-native';
import {getFontSize} from './theme/globalTheme';

//to use fontFamilly type : Nunito-<Bold/SemiBold/Regular/Ligth/Medium...>
const globalStyles = StyleSheet.create({
  customButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    alignItems: 'center',
    borderRadius: 10,
  },
  customButtonText: {
    fontSize: getFontSize('h5'),
    fontFamily: 'Nunito-Bold',
  },
  customTextInput: {
    marginBottom: 16
  },
  textInputLable: {
    fontFamily: 'Nunito-SemiBold',
    fontSize: getFontSize('h4'),
  },
  textInputplaceHolder: {
    borderBottomWidth: 2,
    paddingTop: 0,
    paddingBottom: 1,
  },
});

export default globalStyles;

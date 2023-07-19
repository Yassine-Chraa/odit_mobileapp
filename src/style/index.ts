import {StyleSheet} from 'react-native';
import {getFontSize} from './theme/globalTheme';

//to use fontFamilly type : Nunito-<Bold/SemiBold/Regular/Ligth/Medium...>
const globalStyles = StyleSheet.create({
  customButton: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 10,
  },
  customButtonText: {
    fontSize: getFontSize('h5'),
    fontFamily: 'Nunito-Bold',
  },
  customTextInput: {
    
  },
  textInputLable: {
    fontFamily: 'Nunito-SemiBold',
    fontSize: getFontSize('h4'),
    textTransform: 'capitalize',
  },
  textInputplaceHolder: {
    borderBottomWidth: 2,
    paddingTop: 0,
    paddingBottom: 1,
    paddingHorizontal: 0,
    fontSize: getFontSize('h6')
  },
  confirmationInput: {
       paddingVertical: 10,
    paddingHorizontal: 5,
    fontSize: 18,
    letterSpacing: 15,
    textAlign: 'center',
    width: 200,
    marginLeft:'auto',
    marginRight:'auto',
    marginTop:10
  },
});

export default globalStyles;

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
  customTextInput: {},
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
    fontSize: getFontSize('h6'),
  },
  mainScreen: {
    paddingHorizontal: 8,
    paddingTop: 16, //modified,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    width: 74,
    height: 57.5,
  },
  profile: {
    width: 48,
    height: 48,
  },
  pageTitle: {
    fontFamily: 'Nunito-Bold',
    fontSize: getFontSize('pageTitleSize'),
    textAlign: 'center',
    textTransform: 'capitalize',
    marginBottom: 24,
    marginTop: 15,
  },
  sentence: {
    fontSize: getFontSize('h4'),
    fontFamily: 'Nunito-Bold',
    textTransform: 'capitalize',
  },
  card: {
    borderRadius: 5,
    padding: 16,
    marginTop: 4,
    elevation: 2,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default globalStyles;

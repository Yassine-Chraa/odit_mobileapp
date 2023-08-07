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
    marginBottom: 24,
  },
  textInputLable: {
    marginBottom: -6,
    fontFamily: 'Nunito-SemiBold',
    fontSize: getFontSize('h4'),
    textTransform: 'capitalize',
  },
  textInputplaceHolder: {
    borderBottomWidth: 2,
    paddingBottom: 0,
    paddingHorizontal: 0,
    fontSize: getFontSize('h6'),
  },
  textInputRule: {
    fontSize: getFontSize('h7'),
    marginVertical: 0,
    paddingVertical: 0,
  },
  customInputIcon: {
    position: 'absolute',
    right: 0,
    top: '50%',
    width: 16,
    height: 16,
    borderRadius: 16,
  },
  mainScreen: {
    paddingHorizontal: 8,
    marginTop: 12, //modified,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontFamily: 'Nunito-Bold',
    fontSize: getFontSize('h4'),
    marginLeft: 'auto',
    marginRight: 'auto',
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
    fontSize: getFontSize('h4')-1,
    fontFamily: 'Nunito-Bold',
    textTransform: 'capitalize',
  },
  card: {
    borderRadius: 5,
    padding: 16,
    elevation: 8,
    marginVertical: 24,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  costomTextInputWithIcon: {
    paddingTop: 0,
    paddingBottom: 0,
    paddingHorizontal: 0,
    fontSize: getFontSize('h6'),
  },
  borderBottom: {
    borderBottomWidth: 2,
    paddingBottom: 0,
    marginBottom: 0,
  },

   memberItem: {
      flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 8,
    marginLeft:'auto',
    marginRight:'auto',
    borderRadius: 8,
    width:'80%',
    textAlign:'center'
  },

  swipeButton: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 8,
    width: 40,
    height: 4.5,
    borderRadius: 8,
    backgroundColor: '#68B984',
    opacity: 0.7,
  },
  modal: {
    marginBottom: 0,
    paddingTop: 0,
    marginLeft: 0,
    width: '100%',
    justifyContent: 'flex-end',
  },
  modalContent: {
    borderRadius: 16,
    paddingHorizontal: 8,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sectionTitle: {
    fontSize: getFontSize('h4'),
    textTransform: 'capitalize',
    fontFamily: 'Nunito-SemiBold',
  },
});

export default globalStyles;

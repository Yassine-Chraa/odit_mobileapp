import {Dimensions} from 'react-native';
import {StyleSheet} from 'react-native';
import {getFontSize} from '../theme/globalTheme';

const width = Dimensions.get('screen').width;
const homeStyles = StyleSheet.create({
  addCard: {
    height: 172,
    width: width / 3,
    marginLeft: 6,
    rowGap: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addCardTitle: {
    fontSize: getFontSize('h5'),
    fontFamily: 'Nunito-Bold',
    textAlign: 'center',
  },
  overlay: {
    position: 'absolute',
    backgroundColor: '#35190080',
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
    padding: 8,
  },
  overlayText: {
    textAlign: 'center',
    color: '#EBE8E6',
    fontSize: getFontSize('h5'),
    fontFamily: 'Nunito-Bold',
  },
});

export default homeStyles;

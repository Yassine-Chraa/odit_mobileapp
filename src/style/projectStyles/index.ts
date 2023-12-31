import {Dimensions} from 'react-native';
import {StyleSheet} from 'react-native';
import {getFontSize} from '../theme/globalTheme';

const width = Dimensions.get('screen').width;

const projectStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    rowGap: 16,
  },
  title: {
    textAlign: 'center',
    fontFamily: 'Nunito-Medium',
    fontSize: getFontSize('h5') + 1,
    textTransform: 'capitalize',
  },
  description: {
    marginTop: 4,
    fontFamily: 'Nunito-Medium',
    fontSize: getFontSize('h6')
  },
  projectImage: {
    height: 120*(width/312),
    width: width-64,
    borderRadius: 6,
  },
  
});

export default projectStyles;

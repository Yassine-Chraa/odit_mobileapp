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
    marginTop: 12,
    fontFamily: 'Nunito-Medium',
    fontSize: getFontSize('h6')
  },
  projectImage: {
    height: 106*(width/312),
    width: width-64,
    borderRadius: 6,
  },
  sectionTitle: {
    fontSize: getFontSize('h4'),
    textTransform: 'capitalize',
    fontFamily: 'Nunito-SemiBold',
  },
  sectionHeader: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default projectStyles;

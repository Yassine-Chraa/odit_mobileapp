import {StyleSheet} from 'react-native';
import {getFontSize} from '../theme/globalTheme';

const taskStyles = StyleSheet.create({
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  sectionText: {
    fontFamily: 'Nunito-SemiBold',
    fontSize: 20,
  },
  task: {
    marginTop: 32,
  },
  taskBody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8,
  },
  taskName: {
    fontFamily: 'Nunito-Medium',
    fontSize: getFontSize('h5'),
    textTransform: "capitalize"
  },
  deadline: {
    fontFamily: 'Nunito-Bold',
    fontSize: getFontSize('h5'),
  },
  members: {
    columnGap: 12,
    flexDirection: 'row',
    marginTop: 8,
  },
});

export default taskStyles;

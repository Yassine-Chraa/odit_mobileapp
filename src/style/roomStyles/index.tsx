import {StyleSheet} from 'react-native';
import { getFontSize } from '../theme/globalTheme';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';

const roomStyles = StyleSheet.create({
 container: {
    borderRadius: 6,
    padding: 16,
    marginTop:4,
    elevation: 6,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: getFontSize('h4'),
    fontWeight: 'bold',
  },
    memberContainer: {
    marginBottom: 8,
    paddingBottom:8,
    width: '100%',
    borderBottomWidth: 3/4,
  },
  memberRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  memberPicture: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  memberName: {
    fontSize: getFontSize('h6'),
  },
 
});

export default roomStyles;

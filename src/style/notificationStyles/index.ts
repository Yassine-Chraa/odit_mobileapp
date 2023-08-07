import {Dimensions} from 'react-native';
import {StyleSheet} from 'react-native';
import {getFontSize} from '../theme/globalTheme';

const notificationStyles = StyleSheet.create({
 notifContainer: {
    borderRadius: 10,
    paddingTop: 8,
    paddingBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom:8
  },
  notifs:{
    justifyContent: 'space-between',
    width:'100%',
    paddingVertical: 16,
  },
  notifItem:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical:9
  },

 avatarContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  avatarText: {
    fontSize: getFontSize('h5'),
},
  textContainer: {
    flex: 1, 
  },

    
});

export default notificationStyles;

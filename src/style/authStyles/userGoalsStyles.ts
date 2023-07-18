import {StyleSheet} from 'react-native';
import {getFontSize, getColors} from '../theme/globalTheme';

const userGoalsStyle = StyleSheet.create({
  title: {
    fontSize: getFontSize('h4'),
    fontFamily: 'Nunito-Bold',
    marginBottom: 32,
    textAlign: 'center',
    textShadowColor: 'rgba(48, 38, 10, 0.20)',
    textShadowRadius: 10,
    textTransform: 'capitalize',
  },
  box:{
    borderRadius: 5,
    borderWidth: 1,
  },
  display:{
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  gap:{
    marginVertical: 32,
  },
  appUtil:{
    
  }
});

export default userGoalsStyle;

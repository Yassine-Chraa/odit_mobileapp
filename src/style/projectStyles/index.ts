import {StyleSheet} from 'react-native';
import {getColors, getFontSize} from '../theme/globalTheme';

const projectStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      },
      item: {
        marginBottom: 24, // Gap between items (32px)
        fontSize: getFontSize('h6')
      },
      title: {
        textAlign: 'center',
        fontFamily: 'Nunito',
        fontSize: getFontSize('h5'),
        fontWeight: '500',
        textTransform: 'capitalize',
      },
      projectImage: {
        paddingVertical: 0,
        marginVertical: 0, 
        width: 400,
        height: 106,
      },
      sectionTitle:{
        fontSize: getFontSize('h4'),
        textTransform: 'capitalize',
        fontFamily: 'Nunito',
        fontWeight: '600',
      },
      sectionHeader:{
        flex: 1,
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'space-between',
      }
})

export default projectStyles;
import {StyleSheet} from 'react-native';
import {getColors, getFontSize} from '../theme/globalTheme';

const projectStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',borderRadius: 10,
        backgroundColor: '#FEFEFE', // If '--surface-color' is not defined, fallback to #FEFEFE
        // shadowColor: 'rgba(48, 38, 10, 0.20)',
        // shadowOffset: { width: 0, height: 4 },
        // shadowRadius: 10,
        // shadowOpacity: 1,
        elevation: 8,
        marginVertical: 24,
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
      }
})

export default projectStyles;
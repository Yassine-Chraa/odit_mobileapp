import { Text, TouchableOpacity, View } from "react-native"
import { getColors } from "../../style/theme/globalTheme";
import authStyles from "../../style/authStyles";
import startStyle from "../../style/authStyles/startStyles";
import AuthScreen from "../../components/auth/AuthScreen";
import { useDispatch } from "react-redux";
import CustomButton from "../../components/auth/CustomButton";

const StartView = ({ navigation }: any): JSX.Element => {
    //const dispatch = useDispatch()
    //const test = () => dispatch<any>(switchDarkMode());
    const headerBackground = require('../../assets/images/bg1.png');
    const { secondaryTextColor, largeTextColor } = getColors();
    
    return (
        <AuthScreen image={headerBackground}>
            <Text style={[startStyle.subTitle, { color: secondaryTextColor }]}>Manage, achieve greatness.</Text>
            <Text style={[authStyles.title, { color: largeTextColor, maxWidth: 320 }]}>Discover the power of collaborative achievement.</Text>
            <CustomButton title="Start Now" action={() => navigation.navigate("AfterStart")} />
        </AuthScreen>
    )
}
export default StartView;
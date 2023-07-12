import { Text, TouchableOpacity, View } from "react-native"
import { getColors } from "../../style/theme/globalTheme";
import authStyles from "../../style/authStyles";
import startStyle from "../../style/authStyles/startStyles";
import globalStyles from "../../style";
import AuthScreen from "../../components/auth/AuthScreen";
import { useDispatch } from "react-redux";
import { switchDarkMode } from "../../redux/actions/settings";

const StartView = ({ navigation }: any): JSX.Element => {
    const dispatch = useDispatch()
    const test = () => dispatch<any>(switchDarkMode());
    const headerBackground = require('../../assets/images/bg1.png');
    const { secondaryTextColor, largeTextColor, buttonBackgroundColor, buttonTextColor } = getColors();
    return (
        <AuthScreen image={headerBackground}>
            <Text style={[startStyle.subTitle, { color: secondaryTextColor }]}>Manage, achieve greatness.</Text>
            <View style={[authStyles.body]}>
                <Text style={[authStyles.description, { color: largeTextColor, maxWidth: 320 }]}>Discover the power of collaborative achievement.</Text>
                <TouchableOpacity
                    activeOpacity={0.6}
                    onPress={() => navigation.navigate("AfterStart")}
                    style={[globalStyles.customButton, { backgroundColor: buttonBackgroundColor, width: 160 }]}>
                    <Text style={[globalStyles.customButtonText, { color: buttonTextColor }]}>Start Now</Text>
                </TouchableOpacity>
            </View>
        </AuthScreen>
    )
}
export default StartView;
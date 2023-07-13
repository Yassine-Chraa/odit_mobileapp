import { Text,View } from "react-native"
import { getColors } from "../../style/theme/globalTheme";
import authStyles from "../../style/authStyles";
import AuthScreen from "../../components/auth/AuthScreen";
import loginStyle from "../../style/authStyles/loginStyle";
import CustomTextInput from "../../components/auth/CustomTextInput";
import CustomButton from "../../components/auth/CustomButton";

const LoginView = ({ navigation }: any): JSX.Element => {
    const headerBackground = require('../../assets/images/bg3.png');
    const { largeTextColor, secondaryTextColor, primaryTextColor, buttonTextColor, actionColor, buttonBackgroundColor } = getColors();
    
    return (
        <AuthScreen image={headerBackground} imageHeight={160}>
            <View>
                <Text style={[loginStyle.title, { color: largeTextColor }]}>Hello again!</Text>
                <Text style={[loginStyle.subTitle, { color: secondaryTextColor }]}>Keep growing.</Text>
            </View>
            <View style={loginStyle.formInputs}>
                <CustomTextInput type="email"/>
                <CustomTextInput type="password" disableMargin/>
            </View>
            <View>
                <CustomButton type="auth" title="Log In"/>
                <Text style={[authStyles.bottomText, { color: primaryTextColor }]}>
                    Don’t have an account?
                    <Text onPress={() => navigation.navigate('Signup')} style={{ color: actionColor }}>  Sign Up</Text>
                </Text>
            </View>
        </AuthScreen >
    )
}
export default LoginView;
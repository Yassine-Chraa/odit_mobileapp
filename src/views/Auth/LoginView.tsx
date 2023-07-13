import { Text, TextInput, TouchableOpacity, View } from "react-native"
import { getColors } from "../../style/theme/globalTheme";
import authStyles from "../../style/authStyles";
import AuthScreen from "../../components/auth/AuthScreen";
import loginStyle from "../../style/authStyles/loginStyle";
import globalStyles from "../../style";
import afterStartStyles from "../../style/authStyles/afterStartStyles";
import CustomTextInput from "../../components/auth/CustomTextInput";
import CustomButton from "../../components/auth/CustomButton";

const LoginView = ({ navigation }: any): JSX.Element => {
    const headerBackground = require('../../assets/images/bg3.png');
    const { largeTextColor, secondaryTextColor, primaryTextColor, buttonTextColor, actionColor, buttonBackgroundColor } = getColors();
    
    return (
        <AuthScreen image={headerBackground} imageHeight={200}>
            <View style={[authStyles.body]}>
                <Text style={[loginStyle.description, { color: largeTextColor }]}>Hello again!</Text>
                <Text style={[loginStyle.subTitle, { color: secondaryTextColor }]}>Keep growing.</Text>
            </View>
            <View style={loginStyle.form}>
                <CustomTextInput type="email"/>
                <CustomTextInput type="password"/>
            </View>
            <View style={{ marginTop: 13 }}>
                <CustomButton type="auth" title="Log In"/>
                <Text style={[afterStartStyles.signIn, { color: primaryTextColor }]}>
                    Don’t have an account?
                    <Text onPress={() => navigation.navigate('Login')} style={{ color: actionColor }}>  Sign Up</Text>
                </Text>
            </View>
        </AuthScreen >
    )
}
export default LoginView;
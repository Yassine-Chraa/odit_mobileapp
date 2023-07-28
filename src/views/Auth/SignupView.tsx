import { Text, View } from "react-native"
import { getColors } from "../../style/theme/globalTheme";
import AuthScreen from "../../components/auth/AuthScreen";
import CustomTextInput from "../../components/auth/CustomTextInput";
import singupStyle from "../../style/authStyles/signupStyles";
import authStyles from "../../style/authStyles";
import CustomButton from "../../components/main/CustomButton";

const SignupView = ({ navigation }: any): JSX.Element => {
    const headerBackground = require('../../assets/images/bg3.png');
    const { largeTextColor, primaryTextColor, actionColor } = getColors();

    

    return (
        <AuthScreen image={headerBackground} imageHeight={160}>
            <Text style={[singupStyle.title, { color: largeTextColor }]}>welcome!</Text>
            <View style={singupStyle.formInputs}>
                <CustomTextInput type="name" placeholder="Enter your full name" />
                <CustomTextInput type="email" placeholder="example@email.com" />
                <CustomTextInput type="password" placeholder="password"/>
                <CustomTextInput type="confirm password" placeholder="password"/>
            </View>
            <View>
                <CustomButton type="auth" title="Continue" action={() => navigation.navigate('Confirmation')} />
                <Text style={[authStyles.bottomText, { color: primaryTextColor }]}>
                    Don’t have an account?
                    <Text onPress={() => navigation.navigate('Login')} style={{ color: actionColor }}>  Sign Up</Text>
                </Text>
            </View>
        </AuthScreen >
    )
}
export default SignupView;
import { Text, View } from "react-native"
import { getColors } from "../../style/theme/globalTheme";
import AuthScreen from "../../components/auth/AuthScreen";
import CustomTextInput from "../../components/auth/CustomTextInput";
import CustomButton from "../../components/auth/CustomButton";
import singupStyle from "../../style/authStyles/signupStyles";
import UseAuthViewController from "../../viewcontrollers/useAuthViewController";
import authStyles from "../../style/authStyles";

const SignupView = ({ navigation }: any): JSX.Element => {
    const headerBackground = require('../../assets/images/bg3.png');
    const { largeTextColor, primaryTextColor, actionColor } = getColors();

    const { signup } = UseAuthViewController();

    return (
        <AuthScreen image={headerBackground} imageHeight={160}>
            <Text style={[singupStyle.title, { color: largeTextColor }]}>welcome!</Text>
            <View style={singupStyle.formInputs}>
                <CustomTextInput type="name" />
                <CustomTextInput type="email" />
                <CustomTextInput type="password" />
                <CustomTextInput type="confirm password" />
            </View>
            <View>
                <CustomButton type="auth" title="Continue" action={signup} />
                <Text style={[authStyles.bottomText, { color: primaryTextColor }]}>
                    Don’t have an account?
                    <Text onPress={() => navigation.navigate('Login')} style={{ color: actionColor }}>  Sign Up</Text>
                </Text>
            </View>
        </AuthScreen >
    )
}
export default SignupView;
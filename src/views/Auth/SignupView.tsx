import { Text, View } from "react-native"
import { getColors } from "../../style/theme/globalTheme";
import AuthScreen from "../../components/auth/AuthScreen";
import CustomTextInput from "../../components/auth/CustomTextInput";
import singupStyle from "../../style/authStyles/signupStyles";
import authStyles from "../../style/authStyles";
import CustomButton from "../../components/main/CustomButton";
import UseAuthViewController from "../../viewcontrollers/useAuthViewController";

const SignupView = ({ navigation }: any): JSX.Element => {
    const headerBackground = require('../../assets/images/bg3.png');
    const { largeTextColor, primaryTextColor, actionColor } = getColors();

    const { signupCredential, setSignupCredential, beforeSignup } = UseAuthViewController()

    return (
        <AuthScreen image={headerBackground} imageHeight={160}>
            <Text style={[singupStyle.title, { color: largeTextColor }]}>welcome!</Text>
            <View style={singupStyle.formInputs}>
                <CustomTextInput
                    type="first name"
                    placeholder="Enter your first name"
                    value={signupCredential.firstName}
                    setValue={(v) => setSignupCredential((prev) => {
                        return { ...prev, firstName: v }
                    })} />
                <CustomTextInput
                    type="last name"
                    placeholder="Enter your last name"
                    value={signupCredential.lastName}
                    setValue={(v) => setSignupCredential((prev) => {
                        return { ...prev, lastName: v }
                    })} />
                <CustomTextInput
                    type="email"
                    placeholder="example@email.com"
                    value={signupCredential.email}
                    setValue={(v) => setSignupCredential((prev) => {
                        return { ...prev, email: v }
                    })} />
                <CustomTextInput
                    type="password"
                    placeholder="password"
                    value={signupCredential.password}
                    setValue={(v) => setSignupCredential((prev) => {
                        return { ...prev, password: v }
                    })} />
            </View>
            <View>
                <CustomButton type="auth" title="Continue" action={beforeSignup} />
                <Text style={[authStyles.bottomText, { color: primaryTextColor }]}>
                    Don’t have an account?
                    <Text onPress={() => navigation.navigate('Login')} style={{ color: actionColor }}>  Sign Up</Text>
                </Text>
            </View>
        </AuthScreen >
    )
}
export default SignupView;
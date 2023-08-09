import { Text, View } from "react-native"
import { getColors } from "../../style/theme/globalTheme";
import authStyles from "../../style/authStyles";
import AuthScreen from "../../components/auth/AuthScreen";
import loginStyle from "../../style/authStyles/loginStyle";
import CustomTextInput from "../../components/auth/CustomTextInput";
import CustomButton from "../../components/main/CustomButton";
import UseAuthViewController from "../../viewcontrollers/useAuthViewController";

const LoginView = ({ navigation }: any): JSX.Element => {
    const headerBackground = require('../../assets/images/bg3.png');
    const { largeTextColor, secondaryTextColor, primaryTextColor, actionColor } = getColors();

    const { loginCredential, setLoginCredential, login } = UseAuthViewController()
    return (
        <AuthScreen image={headerBackground} imageHeight={160}>
            <View>
                <Text style={[loginStyle.title, { color: largeTextColor }]}>Hello again!</Text>
                <Text style={[loginStyle.subTitle, { color: secondaryTextColor }]}>Keep growing.</Text>
            </View>
            <View style={loginStyle.formInputs}>
                <CustomTextInput type="email"
                    placeholder="example@gmail.com"
                    value={loginCredential.email}
                    setValue={(v) => setLoginCredential((prev) => {
                        return { ...prev, email: v }
                    })} />
                <CustomTextInput type="password"
                    placeholder="password"
                    value={loginCredential.password}
                    setValue={(v) => setLoginCredential((prev) => {
                        return { ...prev, password: v }
                    })}
                />
            </View>
            <View>
                <CustomButton type="auth" title="Log In" action={login} />
                <Text style={[authStyles.bottomText, { color: primaryTextColor }]}>
                    Don’t have an account?
                    <Text onPress={() => navigation.navigate('Signup')} style={{ color: actionColor }}>  Sign Up</Text>
                </Text>
            </View>
        </AuthScreen >
    )
}
export default LoginView;
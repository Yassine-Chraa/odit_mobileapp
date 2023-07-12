import { Text, TextInput, TouchableOpacity, View } from "react-native"
import { getColors } from "../../style/theme/globalTheme";
import authStyles from "../../style/authStyles";
import AuthScreen from "../../components/auth/AuthScreen";
import loginStyle from "../../style/authStyles/loginStyle";
import globalStyles from "../../style";
import afterStartStyles from "../../style/authStyles/afterStartStyles";

const LoginView = ({ navigation }: any): JSX.Element => {
    const headerBackground = require('../../assets/images/bg3.png');
    const { largeTextColor, secondaryTextColor, primaryTextColor, buttonTextColor, actionColor, buttonBackgroundColor, additionalInfoColor } = getColors();
    return (
        <AuthScreen image={headerBackground} imageHeight={200}>
            <View style={[authStyles.body]}>
                <Text style={[loginStyle.description, { color: largeTextColor }]}>Hello again!</Text>
                <Text style={[loginStyle.subTitle, { color: secondaryTextColor }]}>Keep growing.</Text>
            </View>
            <View style={loginStyle.form}>
                <View style={globalStyles.customTextInput}>
                    <Text style={[globalStyles.textInputLable, { color: largeTextColor }]}>Email</Text>
                    <TextInput
                        placeholder="email"
                        placeholderTextColor={secondaryTextColor}
                        style={[globalStyles.textInputplaceHolder,
                        { color: secondaryTextColor, borderBottomColor: additionalInfoColor }]} />
                </View>
                <View style={globalStyles.customTextInput}>
                    <Text style={[globalStyles.textInputLable, { color: largeTextColor }]}>Password</Text>
                    <TextInput

                        placeholder="password"
                        placeholderTextColor={secondaryTextColor}
                        secureTextEntry
                        style={[globalStyles.textInputplaceHolder,
                        { color: secondaryTextColor, borderBottomColor: additionalInfoColor }]} />
                </View>
            </View>
            <View style={{ marginTop: 13 }}>
                <TouchableOpacity style={[globalStyles.customButton, { backgroundColor: buttonBackgroundColor }]}>
                    <Text style={[globalStyles.customButtonText, { color: buttonTextColor }]}>Sign Up</Text>
                </TouchableOpacity>
                <Text style={[afterStartStyles.signIn, { color: primaryTextColor }]}>
                    Don’t have an account?
                    <Text onPress={() => navigation.navigate('Login')} style={{ color: actionColor }}>  Sign Up</Text>
                </Text>
            </View>
        </AuthScreen >
    )
}
export default LoginView;
import { Text, View } from "react-native"
import { getColors } from "../../style/theme/globalTheme";
import AuthScreen from "../../components/auth/AuthScreen";
import afterStartStyles from "../../style/authStyles/afterStartStyles";
import authStyles from "../../style/authStyles";
import CustomButton from "../../components/main/CustomButton";

const AfterStartView = ({ navigation }: any): JSX.Element => {
    const headerBackground = require('../../assets/images/bg2.png');
    const { largeTextColor, primaryTextColor, actionColor } = getColors();

    return (
        <AuthScreen image={headerBackground}>
            <Text style={[afterStartStyles.description, { color: largeTextColor }]}>chat, collaborate, manage your team and so much more</Text>
            <View style={{ marginTop: 13 }}>
                <CustomButton type="auth" title="Sign Up" action={() => navigation.navigate("Signup")} />
                <Text style={[authStyles.bottomText, { color: primaryTextColor }]}>
                    Already have an account?
                    <Text onPress={() => navigation.navigate('Login')} style={{ color: actionColor }}>  Sign In</Text>
                </Text>
            </View>
        </AuthScreen>
    )
}
export default AfterStartView;
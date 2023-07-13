import { Text, View } from "react-native"
import { getColors } from "../../style/theme/globalTheme";
import authStyles from "../../style/authStyles";
import AuthScreen from "../../components/auth/AuthScreen";
import afterStartStyles from "../../style/authStyles/afterStartStyles";
import CustomButton from "../../components/auth/CustomButton";

const AfterStartView = ({ navigation }: any): JSX.Element => {
    const headerBackground = require('../../assets/images/bg2.png');
    const { largeTextColor, primaryTextColor, actionColor } = getColors();

    return (
        <AuthScreen image={headerBackground}>
            <View style={[authStyles.body]}>
                <Text style={[afterStartStyles.description, { color: largeTextColor }]}>chat, collaborate, manage your team and so much more</Text>
                <View style={{ marginTop: 13 }}>
                    <CustomButton type="auth" title="Sign Up" />
                    <Text style={[afterStartStyles.signIn, { color: primaryTextColor }]}>
                        Already have an account?
                        <Text onPress={() => navigation.navigate('Login')} style={{ color: actionColor }}>  Sign In</Text>
                    </Text>
                </View>
            </View>
        </AuthScreen>
    )
}
export default AfterStartView;
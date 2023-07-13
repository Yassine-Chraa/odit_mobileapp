import { KeyboardAvoidingView, Platform, View } from "react-native"
import { getColors } from "../../style/theme/globalTheme";
import authStyles from "../../style/authStyles";
import { Image } from "@rneui/themed";

const AuthScreen = ({ children, image, imageHeight }: any): JSX.Element => {
    const { backgroundColor } = getColors();
    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : 'position'}>
            <View style={[authStyles.screen]}>
                <View style={authStyles.header}>
                    <Image resizeMode="contain" source={image} style={[authStyles.authPoster, { height: imageHeight || 259 }]} />
                </View>
                {children}
            </View>
        </KeyboardAvoidingView>
    )
}
export default AuthScreen;
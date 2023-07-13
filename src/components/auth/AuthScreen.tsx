import { KeyboardAvoidingView, Platform, View } from "react-native"
import authStyles from "../../style/authStyles";
import { Image } from "@rneui/themed";

const AuthScreen = ({ children, image, imageHeight }: any): JSX.Element => {
    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <View style={[authStyles.screen]}>
                <View style={authStyles.header}>
                    <Image resizeMode="contain" source={image} style={[authStyles.authPoster, { height: imageHeight || 250 }]} />
                </View>
                {children}
            </View>
        </KeyboardAvoidingView>
    )
}
export default AuthScreen;
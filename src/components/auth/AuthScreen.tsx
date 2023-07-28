import { KeyboardAvoidingView, Platform, View ,ScrollView} from "react-native"
import authStyles from "../../style/authStyles";
import { Image } from "@rneui/themed";

const AuthScreen = ({ children, image, imageHeight }: any): JSX.Element => {
    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <ScrollView style={[authStyles.screen]}>
                <View style={authStyles.header}>
                    <Image resizeMode="contain" source={image} style={[authStyles.authPoster, { height: imageHeight || 250 }]} />
                </View>
                {children}
            </ScrollView>
        </KeyboardAvoidingView>
    )
}
export default AuthScreen;
import { Text, View } from "react-native"
import { getColors } from "../../style/theme/globalTheme";
import AuthScreen from "../../components/auth/AuthScreen";
import CustomButton from "../../components/auth/CustomButton";
import UseAuthViewController from "../../viewcontrollers/useAuthViewController";
import confirmationStyles from "../../style/authStyles/confirmationStyles";
import authStyles from "../../style/authStyles";
import { Image } from "@rneui/themed";
import ConfirmationInput from "../../components/confirmation/ConfirmationInput";


const ConfirmationView = ({navigation} : any): JSX.Element => {
    const headerBackground = require('../../assets/images/bg3.png');
    const image = require('../../assets/images/confirmation_letter.png');
    const { largeTextColor, primaryTextColor,additionalInfoColor } = getColors();

    const { signup } = UseAuthViewController();

    return (
        <AuthScreen image={headerBackground} imageHeight={160}>
            <Text style={[confirmationStyles.title, { color: largeTextColor,textAlign: 'center' }]}>Confirmation</Text>
            <View style={[confirmationStyles.formInputs]}>
                <View style={authStyles.header}>
                    <Image resizeMode="contain" source={image} style={[authStyles.authPoster, { height:  70 }]} />
                </View>
                
                      <View style={confirmationStyles.confirmationContainer}>
                          <Text style={confirmationStyles.confirmationText} numberOfLines={2}>
                            Enter the 6-digit code sent to you at example@gmail.com
                        </Text>
                      </View>

                      <ConfirmationInput />
                       
            </View>
            <View>
                <CustomButton type="auth" title="Continue" action={() => navigation.navigate("UserGoals")}  />
                <Text style={[authStyles.bottomText, { color: primaryTextColor }]}>
                    Don’t have an account?
                </Text>
            </View>
        </AuthScreen >
    )
}
export default ConfirmationView;
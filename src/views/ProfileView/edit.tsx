import { View, Text, ScrollView } from "react-native"
import globalStyles from "../../style"
import { Image } from "@rneui/themed"
import { getColors, getFontSize } from "../../style/theme/globalTheme"
import profileStyles from "../../style/profileStyles"
import CustomTextInput from "../../components/auth/CustomTextInput"
import singupStyle from "../../style/authStyles/signupStyles"
import authStyles from "../../style/authStyles"
import CustomButton from "../../components/main/CustomButton"
import CustomIcon from "../../components/main/CustomIcon"
import MainScreen from "../../components/main/MainScreen"


const EditProfile = (): JSX.Element => {
    const profile = require("../../assets/images/profile2.jpg")
    const { largeTextColor } = getColors();
    return (
        <MainScreen options={{ showHeader: false, title: "Edit Profile" }}>

        <ScrollView style={{ paddingHorizontal: 16 }}>
            <View style={[{ marginTop: 20, alignItems: 'center' }]}>
                <Text style={[profileStyles.headerTitle, { color: largeTextColor }]}>Profile</Text>
                <View style={{ padding: 8, alignItems: 'center' }}>
                    <Image resizeMode="contain" source={profile} style={profileStyles.profile} />
                    <Text style={[profileStyles.username, { color: largeTextColor }]}>Taryn Durate</Text>
                    <Text style={[profileStyles.mediumText, profileStyles.email, { color: largeTextColor }]}>taryn_durate@gmail.com</Text>
                </View>
            
            </View>
            <View>
              <View style={singupStyle.formInputs}>
                <CustomTextInput type="name" placeholder="John Doe" />
                <CustomTextInput type="email" placeholder="john@email.com" />
                <CustomTextInput type="password" placeholder="password"/>
            </View>
            <View>
                <CustomButton type="auth" title={`Save Changes`} icon="save" action={() =>console.log("works")} />
            </View>
            </View>
        </ScrollView >
        </MainScreen>

    )
}

export default EditProfile
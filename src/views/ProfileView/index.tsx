import { View, Text, Switch } from "react-native"
import globalStyles from "../../style"
import { Image } from "@rneui/themed"
import CustomButton from "../../components/main/CustomButton"
import CustomIcon from "../../components/main/CustomIcon"
import { getColors, getFontSize } from "../../style/theme/globalTheme"
import profileStyles from "../../style/profileStyles"
import useProfileController from "../../viewcontrollers/useProfileController"

const ProfileView = (): JSX.Element => {
    const { switchDark,darkMode } = useProfileController();
    const profile = require("../../assets/images/profile2.jpg")
    const { largeTextColor, actionColor } = getColors();
    return (
        <View style={{ paddingHorizontal: 16 }}>
            <View style={[{ marginTop: 20, alignItems: 'center' }]}>
                <Text style={[profileStyles.headerTitle, { color: largeTextColor }]}>Profile</Text>
                <View style={{ padding: 8, alignItems: 'center' }}>
                    <Image resizeMode="contain" source={profile} style={profileStyles.profile} />
                    <Text style={[profileStyles.username, { color: largeTextColor }]}>Taryn Durate</Text>
                    <Text style={[profileStyles.mediumText, profileStyles.email, { color: largeTextColor }]}>taryn_durate@gmail.com</Text>
                </View>
                <View style={{ marginVertical: 32 }}>
                    <CustomButton
                        title="Edit Profile"
                        action={() => console.log("Edit Profile")} />
                </View>
            </View>
            <View>
                <View style={[globalStyles.row, profileStyles.option]}>
                    <Text style={[profileStyles.mediumText, { color: largeTextColor }]}>Dark</Text>
                    <Switch
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                        ios_backgroundColor="#3e3e3e"
                        value={darkMode}
                        onValueChange={(v) => switchDark(v)}
                    />
                </View>
                <View style={[globalStyles.row, profileStyles.option]}>
                    <Text style={[profileStyles.mediumText, { color: largeTextColor }]}>Privacy</Text>
                    <CustomIcon name="rightSmall" />
                </View>
                <View style={[globalStyles.row, profileStyles.option]}>
                    <Text style={[profileStyles.mediumText, { color: largeTextColor }]}>Terms And Conditions</Text>
                    <CustomIcon name="rightSmall" />
                </View>
            </View>
            <Text style={[profileStyles.SemiBoldText, profileStyles.logout, { color: actionColor }]}>Log Out</Text>
        </View >
    )
}

export default ProfileView
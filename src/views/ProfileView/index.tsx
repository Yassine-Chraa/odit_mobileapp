import { View, Text, Switch, TouchableOpacity } from "react-native"
import globalStyles from "../../style"
import { Image } from "@rneui/themed"
import CustomButton from "../../components/main/CustomButton"
import CustomIcon from "../../components/main/CustomIcon"
import { getColors, getFontSize } from "../../style/theme/globalTheme"
import profileStyles from "../../style/profileStyles"
import useProfileController from "../../viewcontrollers/useProfileController"

const ProfileView = ({ navigation }: any): JSX.Element => {
    const { switchDark, darkMode, logout,profile } = useProfileController();
    const userImage = require("../../assets/images/profile2.jpg")
    const { largeTextColor, actionColor } = getColors();
    return (
        <View style={{ paddingHorizontal: 16 }}>
            <View style={[{ marginTop: 20, alignItems: 'center' }]}>
                <Text style={[profileStyles.headerTitle, { color: largeTextColor }]}>Profile</Text>
                <View style={{ padding: 8, alignItems: 'center' }}>
                    <Image resizeMode="contain" source={userImage} style={profileStyles.profile} />
                    <Text style={[profileStyles.username, { color: largeTextColor }]}>{profile.firstName+' '+profile.lastName}</Text>
                    <Text style={[profileStyles.mediumText, profileStyles.email, { color: largeTextColor }]}>{profile.email}</Text>
                </View>
                <View style={{ marginVertical: 32 }}>
                    <CustomButton
                        title="Edit Profile"
                        action={() => navigation.navigate("editProfile")} />
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
                    <TouchableOpacity onPress={() => navigation.navigate("privacypolicy")}>
                        <CustomIcon name="rightSmall" />
                    </TouchableOpacity>
                </View>
                <View style={[globalStyles.row, profileStyles.option]}>
                    <Text style={[profileStyles.mediumText, { color: largeTextColor }]}>Terms And Conditions</Text>
                    <CustomIcon name="rightSmall" />
                </View>
            </View>
            <TouchableOpacity activeOpacity={0.6} onPress={logout}>
                <Text style={[profileStyles.SemiBoldText, profileStyles.logout, { color: actionColor }]}>Log Out</Text>
            </TouchableOpacity>
        </View >
    )
}

export default ProfileView
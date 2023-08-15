import { Text, View, ScrollView } from "react-native"
import { getColors } from "../../style/theme/globalTheme";
import CustomTextInput from "../../components/auth/CustomTextInput";
import CustomButton from "../../components/main/CustomButton";
import UseAuthViewController from "../../viewcontrollers/useAuthViewController";
import MainScreen from "../../components/main/MainScreen";
import profileStyles from "../../style/profileStyles";
import { Image } from "@rneui/themed";
import { defaultUserPicture } from "../../data/default";
import singupStyle from "../../style/authStyles/signupStyles";
import useProfileController from "../../viewcontrollers/useProfileController";

const EditPassword = ({ navigation, route }: any): JSX.Element => {
    const { largeTextColor } = getColors();
    const { profile } = route.params;
    const { passwordRequest, setPasswordRequest, updatePassword } = useProfileController('editPassword')
    return (
        <MainScreen options={{ showHeader: false, title: "Edit Password" }}>
            <View style={[{ marginTop: 20, alignItems: 'center' }]}>
                <View style={{ padding: 8, alignItems: 'center' }}>
                    <Image resizeMode="contain" source={{ uri: profile.picture || defaultUserPicture }} style={profileStyles.profile} />
                    <Text style={[profileStyles.username, { color: largeTextColor }]}>{profile.firstName + ' ' + profile.lastName}</Text>
                    <Text style={[profileStyles.mediumText, profileStyles.email, { color: largeTextColor }]}>{profile.email}</Text>
                </View>

            </View>
            <View style={{ marginTop: 32, marginHorizontal: 4 }}>
                <View style={singupStyle.formInputs}>
                    <CustomTextInput
                        type="current password"
                        placeholder="Enter your current password"
                        value={passwordRequest.currentPassword}
                        setValue={(v) => setPasswordRequest((prev: { firstName: string, lastName: string }) => {
                            return { ...prev, currentPassword: v }
                        })}
                    />
                    <CustomTextInput
                        type="new password"
                        placeholder="Enter new password"
                        value={passwordRequest.newPassword}
                        setValue={(v) => setPasswordRequest((prev: { firstName: string, lastName: string }) => {
                            return { ...prev, newPassword: v }
                        })}
                    />
                    <CustomTextInput
                        type="confirm password"
                        placeholder="Enter password again"
                        value={passwordRequest.confirmPassword}
                        setValue={(v) => setPasswordRequest((prev: { firstName: string, lastName: string }) => {
                            return { ...prev, confirmPassword: v }
                        })}
                    />
                </View>
                <View>
                    <CustomButton type="auth" title={`Save Changes`} icon="save" action={updatePassword} />
                </View>
            </View>
        </MainScreen>
    )
}
export default EditPassword;
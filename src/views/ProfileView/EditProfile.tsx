import { View, Text, TouchableOpacity } from "react-native"
import { Image } from "@rneui/themed"
import { getColors } from "../../style/theme/globalTheme"
import profileStyles from "../../style/profileStyles"
import CustomTextInput from "../../components/auth/CustomTextInput"
import singupStyle from "../../style/authStyles/signupStyles"
import CustomButton from "../../components/main/CustomButton"
import MainScreen from "../../components/main/MainScreen"
import { defaultUserPicture } from "../../data/default"
import useProfileController from "../../viewcontrollers/useProfileController"
import CustomIcon from "../../components/main/CustomIcon"


const EditProfile = ({ route }: any): JSX.Element => {
    const { largeTextColor, buttonBackgroundColor } = getColors();
    const { profile } = route.params;
    const { updateRequest, picture, setUpdateRequest, updateProfile, selectPicture } = useProfileController('editProfile')
    return (
        <MainScreen options={{ showHeader: false, title: "Edit Profile" }}>
            <View style={[{ marginTop: 20, alignItems: 'center' }]}>
                <View style={{ marginVertical: 8, alignItems: 'center' }}>
                    <Image resizeMode="contain" source={{ uri: picture.uri || profile.picture || defaultUserPicture }} style={profileStyles.profile} />
                    <TouchableOpacity onPress={selectPicture} style={{ position: 'absolute', right: 40, top: 4, backgroundColor: buttonBackgroundColor, padding: 8, borderRadius: 16 }}>
                        <CustomIcon name="camera" />
                    </TouchableOpacity>
                    <Text style={[profileStyles.username, { color: largeTextColor }]}>{profile.firstName + ' ' + profile.lastName}</Text>
                    <Text style={[profileStyles.mediumText, profileStyles.email, { color: largeTextColor }]}>{profile.email}</Text>
                </View>
            </View>
            <View style={{ marginTop: 32 }}>
                <View style={singupStyle.formInputs}>
                    <CustomTextInput
                        type="first name"
                        placeholder="Enter your first name"
                        value={updateRequest.firstName}
                        setValue={(v) => setUpdateRequest((prev: { firstName: string, lastName: string }) => {
                            return { ...prev, firstName: v }
                        })}
                    />
                    <CustomTextInput
                        type="last name"
                        placeholder="Enter your last name"
                        value={updateRequest.lastName}
                        setValue={(v) => setUpdateRequest((prev: { firstName: string, lastName: string }) => {
                            return { ...prev, lastName: v }
                        })}
                    />
                </View>
                <View>
                    <CustomButton type="auth" title={`Save Changes`} icon="save" action={updateProfile} />
                </View>
            </View>
        </MainScreen>
    )
}

export default EditProfile
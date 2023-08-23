import { View, TextInput, TouchableOpacity } from "react-native"
import MainScreen from "../../components/main/MainScreen";
import CustomTextInput from "../../components/auth/CustomTextInput";
import MemberCard from "../../components/Project/MemberCard";
import { IMember } from "../../types/IMember";
import AddSth from "../../components/main/AddSth";
import useProjectMembersController from "../../viewcontrollers/useProjectMembersController";
import globalStyles from "../../style";
import { getColors } from "../../style/theme/globalTheme";
import CustomIcon from "../../components/main/CustomIcon";

const ProjectMembers = ({ navigation, route }: any) => {
    const { members, key, showClose, setKey, search, clear } = useProjectMembersController(route.params.members)

    const { secondaryTextColor,additionalInfoColor } = getColors()
    return (
        <MainScreen options={{ showHeader: false, title: "Project Members" }}>
            <View style={{ marginTop: 16, marginBottom: 12 }}>
                <View style={[globalStyles.customTextInput]}>
                    <TextInput
                        value={key}
                        onChangeText={setKey}
                        placeholder="Find Member"
                        placeholderTextColor={secondaryTextColor}
                        style={[globalStyles.textInputplaceHolder,
                        { color: secondaryTextColor, borderBottomColor: additionalInfoColor, marginBottom: 8 }]} />
                    <TouchableOpacity
                        activeOpacity={0.3}
                        onPress={showClose ? clear : search}
                        style={[globalStyles.row, globalStyles.customInputIcon, { transform: [{ translateY: -6 }], justifyContent: 'center', alignItems: 'center' }]}>
                        <CustomIcon
                            name={showClose ? 'close' : 'search'}
                            size={showClose ? 12 : 14}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <AddSth
                sentence="add new member"
                onPress={() => { navigation.navigate("AddProjectMember", { projectId: 1 }) }}
            />
            <View style={{ marginTop: 8 }}>
                {
                    members.map((member: IMember, index: number) => {
                        return (
                            <MemberCard key={index} member={member} />
                        )
                    })
                }
            </View>
        </MainScreen>
    )
}
export default ProjectMembers;
import { View } from "react-native"
import MainScreen from "../../components/main/MainScreen";
import CustomTextInput from "../../components/auth/CustomTextInput";
import MemberCard from "../../components/Project/MemberCard";
import { IMember } from "../../types/IMember";
import AddSth from "../../components/main/AddSth";

const ProjectMembers = ({ navigation, route }: any) => {
    const { members } = route.params
    return (
        <MainScreen options={{ showHeader: false, title: "Project Members" }}>
            <View style={{ marginTop: 16,marginBottom: 12 }}>
                <CustomTextInput placeholder="Find Member" icon="search" />
            </View>
            <AddSth
                sentence="add new member"
                onPress={() => { navigation.navigate("AddProjectMember", { projectId: 1 }) }}
            />
            <View style={{marginTop: 8}}>
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
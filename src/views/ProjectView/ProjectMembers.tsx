import { View } from "react-native"
import MainScreen from "../../components/main/MainScreen";
import CustomTextInput from "../../components/auth/CustomTextInput";
import MemberCard from "../../components/Project/MemberCard";
import { IMember } from "../../types/IMember";

const ProjectMembers = ({ route }: any) => {
    const {members} = route.params
    return (
        <MainScreen options={{ showHeader: false, title: "Project Members" }}>
            <View style={{ marginTop: 24 }}>
                <CustomTextInput placeholder="Find Member" icon="search" />
                {
                    members.map((member:IMember, index:number) => {
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
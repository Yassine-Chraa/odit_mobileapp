import { View } from "react-native"
import MainScreen from "../../components/main/MainScreen";
import { rooms } from "../../data/rooms";
import CustomTextInput from "../../components/auth/CustomTextInput";
import MemberCard from "../../components/Project/MemberCard";

const ProjectMembers = ({ navigation }: any) => {
    const members = rooms[1].members
    return (
        <MainScreen options={{ showHeader: false, title: "Project Members" }}>
            <View style={{ marginTop: 24 }}>
                <CustomTextInput placeholder="Find Member" icon="search" />
                {
                    members.map((member, index) => {
                        return (
                            <MemberCard key={index} member={{...member,role: "Member"}} />
                        )
                    })
                }
            </View>
        </MainScreen>
    )
}
export default ProjectMembers;
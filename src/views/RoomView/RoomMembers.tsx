import RoomMemberCard from "../../components/Room/RoomMembersCard"
import CustomTextInput from "../../components/auth/CustomTextInput"
import MainScreen from "../../components/main/MainScreen"
import { View } from 'react-native'
import CustomButton from "../../components/main/CustomButton"
import useRoomController from "../../viewcontrollers/useRoomController"

const RoomMembers = ({ route }: any): JSX.Element => {
    const { roomId } = route.params;
    const { members } = useRoomController('RoomMembers');
    return (
        <MainScreen options={{ showHeader: false, title: "Room1" }}>
            <View style={{ marginTop: 16 }}>
                <CustomTextInput placeholder="Find Member" icon="search" />
            </View>
            <RoomMemberCard members={members || []} type='AddMember' />
            <View style={{ alignItems: 'center' }}><CustomButton title="Add To Room" action={() => { }} /></View>
        </MainScreen>
    )
}

export default RoomMembers;
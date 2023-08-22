import RoomMemberCard from "../../components/Room/RoomMembersCard"
import CustomTextInput from "../../components/auth/CustomTextInput"
import MainScreen from "../../components/main/MainScreen"
import { View } from 'react-native'
import CustomButton from "../../components/main/CustomButton"
import useRoomController from "../../viewcontrollers/useRoomController"

const RoomMembers = ({ route }: any): JSX.Element => {
    const { roomId,roomName, roomMembers,index } = route.params;
    const { members, addMembers, setSelectedMembers, handleRemoveMember } = useRoomController('RoomMembers', roomMembers);
    return (
        <MainScreen options={{ showHeader: false, title: roomName }}>
            <View style={{ marginTop: 16 }}>
                <CustomTextInput placeholder="Find Member" icon="search" />
            </View>
            <RoomMemberCard
                members={members}
                type='AddMember'
                setSelectedMembers={setSelectedMembers}
                handleRemoveMember={handleRemoveMember} />
            <View style={{ alignItems: 'center',marginBottom: 32 }}><CustomButton title="Add To Room" action={()=>addMembers(roomId,roomName,index)} /></View>
        </MainScreen>
    )
}

export default RoomMembers;
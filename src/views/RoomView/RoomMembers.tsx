import RoomMemberCard from "../../components/Room/RoomMembersCard"
import MainScreen from "../../components/main/MainScreen"
import { View, TextInput, TouchableOpacity } from 'react-native'
import CustomButton from "../../components/main/CustomButton"
import useRoomController from "../../viewcontrollers/useRoomController"
import { getColors } from "../../style/theme/globalTheme"
import globalStyles from "../../style"
import CustomIcon from "../../components/main/CustomIcon"

const RoomMembers = ({ route }: any): JSX.Element => {
    const { roomId, roomName, roomMembers, index } = route.params;
    const { members, addMembers, showClose, setSelectedMembers, handleRemoveMember, search, key, setKey, clear } = useRoomController('RoomMembers', roomMembers);
    const { secondaryTextColor, additionalInfoColor } = getColors();
    return (
        <MainScreen options={{ showHeader: false, title: roomName }}>
            <View style={{ marginTop: 16 }}>
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
            <RoomMemberCard
                members={members}
                type='AddMember'
                setSelectedMembers={setSelectedMembers}
                handleRemoveMember={handleRemoveMember} />
            <View style={{ alignItems: 'center', marginBottom: 32 }}><CustomButton title="Add To Room" action={() => addMembers(roomId, roomName, index)} /></View>
        </MainScreen>
    )
}

export default RoomMembers;
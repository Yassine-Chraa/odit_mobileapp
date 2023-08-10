import { useState } from 'react'
import { Text, View, TouchableOpacity } from "react-native"
import { getColors } from "../../style/theme/globalTheme";
import MainScreen from "../../components/main/MainScreen";
import globalStyles from "../../style";
import CustomTextInput from "../../components/auth/CustomTextInput";
import CustomIcon from '../../components/main/CustomIcon';
import CustomButton from '../../components/main/CustomButton';
import useRoomController from '../../viewcontrollers/useRoomController';

const AddRoom = ({ route }: any): JSX.Element => {
  const { largeTextColor, buttonBackgroundColor } = getColors();
  const { projectId } = route.params
  const { member, members, roomRequest, setRoomRequest, createRoom, setMember, addMember, handleRemoveMember } = useRoomController()
  return (
    <MainScreen>
      <Text style={[globalStyles.pageTitle, { color: largeTextColor }]}>Add a New Room</Text>
      <View>
        <CustomTextInput
          type="Room name"
          placeholder="Room name"
          inputRule="maximum 30 characters"
          value={roomRequest.name}
          setValue={(v) => setRoomRequest((prev) => {
            return { ...prev, name: v }
          })} />
        <CustomTextInput
          type="Room description"
          placeholder="Give a detailed description about your project"
          inputRule="Minimum 200 characters"
          value={roomRequest.description}
          setValue={(v) => setRoomRequest((prev) => {
            return { ...prev, description: v }
          })} />
        <CustomTextInput
          type="add member"
          placeholder="example@email.com"
          icon='plus'
          options={{ iconRole: "button" }}
          buttonAction={addMember}
          value={member}
          setValue={setMember} />
        <View>
          {members.map((member, index) => (
            <View key={index} style={[globalStyles.memberItem, { backgroundColor: largeTextColor }]}>
              <Text style={{ color: 'white' }}>{member}</Text>
              <TouchableOpacity onPress={() => handleRemoveMember(index)} style={{ backgroundColor: buttonBackgroundColor, width: 24, height: 24, borderRadius: 12, justifyContent: "center", alignItems: 'center' }}>
                <CustomIcon focused name="minus" size={16} />
              </TouchableOpacity>
            </View>
          ))}
        </View>
        <CustomButton title="Create Room" action={() => createRoom(projectId)} />
      </View>

    </MainScreen>
  )
}
export default AddRoom;
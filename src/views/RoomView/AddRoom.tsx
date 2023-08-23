import { Text, View } from "react-native"
import { getColors } from "../../style/theme/globalTheme";
import MainScreen from "../../components/main/MainScreen";
import globalStyles from "../../style";
import CustomTextInput from "../../components/auth/CustomTextInput";
import CustomButton from '../../components/main/CustomButton';
import useRoomController from '../../viewcontrollers/useRoomController';
import { IRoom } from '../../types/IRoom';

const AddRoom = ({ route }: any): JSX.Element => {
  const { largeTextColor } = getColors();
  const { projectId } = route.params
  const { roomRequest, setRoomRequest, createRoom } = useRoomController()
  return (
    <MainScreen options={{showHeader: false}}>
      <Text style={[globalStyles.pageTitle, { color: largeTextColor }]}>Add a New Room</Text>
      <View style={{marginTop: 32}}>
        <CustomTextInput
          type="Room name"
          placeholder="Room name"
          inputRule="maximum 30 characters"
          value={roomRequest.name}
          setValue={(v) => setRoomRequest((prev:IRoom) => {
            return { ...prev, name: v }
          })} />
        <CustomTextInput
          type="Room description"
          placeholder="Give a detailed description about your project"
          inputRule="Minimum 200 characters"
          value={roomRequest.description}
          setValue={(v) => setRoomRequest((prev:IRoom) => {
            return { ...prev, description: v }
          })} />
        <CustomButton title="Create Room" action={() => createRoom(projectId)} />
      </View>

    </MainScreen>
  )
}
export default AddRoom;
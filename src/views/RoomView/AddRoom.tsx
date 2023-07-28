import { useState } from 'react'
import { Text, View, TouchableOpacity } from "react-native"
import { getColors } from "../../style/theme/globalTheme";
import MainScreen from "../../components/main/MainScreen";
import globalStyles from "../../style";
import CustomTextInput from "../../components/auth/CustomTextInput";
import CustomIcon from '../../components/main/CustomIcon';
import Toast from 'react-native-toast-message';
import CustomButton from '../../components/main/CustomButton';

const AddRoom = ({ navigation }: any): JSX.Element => {
  const { largeTextColor, buttonBackgroundColor } = getColors();
  const [member, setMember] = useState("")
  const [members, setMembers] = useState<String[]>([]);

  const addMember = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(member)) {
      Toast.show({
        type: 'error',
        text1: 'Enter a Valid Email',
        position: 'top'
      });
      return;
    }
    setMembers([...members, member]);
    setMember('')
  };

  const handleRemoveMember = (index: number) => {
    const updatedMembers = [...members];
    updatedMembers.splice(index, 1);
    setMembers(updatedMembers);
  };

  return (
    <MainScreen>
      <Text style={[globalStyles.pageTitle, { color: largeTextColor }]}>Add a New Room</Text>
      <View>
        <CustomTextInput type="Room name" placeholder="Room name" inputRule="maximum 30 characters" />
        <CustomTextInput type="Room description" placeholder="Give a detailed description about your project" inputRule="Minimum 200 characters" />
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
              <TouchableOpacity onPress={() => handleRemoveMember(index)} style={{backgroundColor: buttonBackgroundColor,width: 24,height: 24,borderRadius: 12,justifyContent: "center",alignItems: 'center'}}>
                <CustomIcon focused name="minus" size={16} />
              </TouchableOpacity>
            </View>
          ))}
        </View>
        <CustomButton title="Create Room" action={() => { }} />
      </View>

    </MainScreen>
  )
}
export default AddRoom;
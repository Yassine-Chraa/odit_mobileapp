import {useState} from 'react'
import { Text, View,TouchableOpacity } from "react-native"
import { getColors } from "../../style/theme/globalTheme";
import MainScreen from "../../components/main/MainScreen";
import globalStyles from "../../style";
import CustomTextInput from "../../components/auth/CustomTextInput";
import AddButton from "../../components/Project/AddButton";
import CustomTextInputWithIcon from '../../components/auth/ConstomTextInputWithIcon';
import CustomIcon from '../../components/main/CustomIcon';
import Toast from 'react-native-toast-message';




const AddRoom = ({ navigation }: any): JSX.Element => {
    const { largeTextColor, buttonBackgroundColor } = getColors();
    const [members, setMembers] = useState<String[]>([]);

    const addMember = (memberEmail: string) => {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(memberEmail)) {
        Toast.show({
      type: 'error',
      text1: 'Enter a Valid Email',
      position:'top'
    });
      return;
    }
        setMembers([...members, memberEmail]);
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
            <CustomTextInput type="Room name" placeholder="Room name" inputRule="maximum 30 characters"/>
            <CustomTextInput type="Room description" placeholder="Give a detailed description about your project" inputRule="Minimum 200 characters"/>
            <CustomTextInputWithIcon type="add member" placeholder="example@email.com"  inputRule="" handleAddMembers={addMember}/>
            <View>
         {members.map((member, index) => (
          <View key={index} style={[globalStyles.memberItem,{backgroundColor:largeTextColor}]}>
            <Text style={{color:'white'}}>{member}</Text>
            <TouchableOpacity onPress={() => handleRemoveMember(index)}>
                <CustomIcon focused name="plusFocused" size={28} />
              </TouchableOpacity>
          </View>
        ))}
      </View>
            <AddButton title="Create Room" action={() =>{}}/>     
            </View>
             
        </MainScreen>
    )
}
export default AddRoom;
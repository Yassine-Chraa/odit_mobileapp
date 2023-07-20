import { Text, View,ScrollView } from "react-native"
import MainScreen from "../../components/main/MainScreen";
import globalStyles from "../../style";
import { getColors } from "../../style/theme/globalTheme";
import AddSth from "../../components/main/AddSth";
import { rooms } from "../../data/rooms";


const RoomDetails = ({navigation}:any): JSX.Element => {
    const { largeTextColor } = getColors()
    const room = rooms[0]
    
    return (
        <ScrollView >
            <MainScreen>
                <View>
                    <Text style={[globalStyles.pageTitle,{color:largeTextColor}]}>{room.title}</Text>
                    <View style={{marginTop:20}}>
                        <AddSth 
                            sentence="Add a new member"
                            onPress={() => {navigation.navigate("Room")}}
                        />
                    </View>
                     
                </View>
            </MainScreen>
        </ScrollView>
    )
}
export default RoomDetails;
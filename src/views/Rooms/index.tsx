import { Text, View,ScrollView } from "react-native"
import MainScreen from "../../components/main/MainScreen";
import globalStyles from "../../style";
import { getColors } from "../../style/theme/globalTheme";
import AddSth from "../../components/main/AddSth";
import { rooms } from "../../data/rooms";
import RoomCard from "../../components/Room/RoomCard";


const RoomView = ({navigation}:any): JSX.Element => {
    const { largeTextColor } = getColors()
    
    return (
        <ScrollView >
            <MainScreen>
                <View>
                    <Text style={[globalStyles.pageTitle,{color:largeTextColor}]}>islamic center cms</Text>
                    <View style={{marginTop:20}}>
                        <AddSth 
                            sentence="create a new room"
                            onPress={() => {navigation.navigate("Home")}}
                        />
                    </View>
                     <View style={{marginTop:10,paddingBottom:20}}>
                        {rooms.map((room, index) => (
                            <RoomCard key={index} title={room.title} members={room.members} navigation={navigation}/>
                        ))}
                </View>
                </View>
            </MainScreen>
        </ScrollView>
    )
}
export default RoomView;
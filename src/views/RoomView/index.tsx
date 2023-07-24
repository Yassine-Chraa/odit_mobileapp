import { Text, View, ScrollView } from "react-native"
import MainScreen from "../../components/main/MainScreen";
import globalStyles from "../../style";
import { getColors } from "../../style/theme/globalTheme";
import AddSth from "../../components/main/AddSth";
import { rooms } from "../../data/rooms";
import RoomCard from "../../components/Room/RoomCard";


const RoomView = ({ navigation }: any): JSX.Element => {
    const { largeTextColor } = getColors()

    return (
        <MainScreen>
            <Text style={[globalStyles.pageTitle, { color: largeTextColor }]}>islamic center cms</Text>
            <AddSth
                sentence="create a new room"
                onPress={() => { navigation.navigate("Home") }}
            />
            <View style={{ marginTop: 10, marginBottom: 20 }}>
                {rooms.map((room, index) => (
                    <RoomCard key={index} title={room.title} members={room.members} navigation={navigation} />
                ))}
            </View>
        </MainScreen>
    )
}
export default RoomView;
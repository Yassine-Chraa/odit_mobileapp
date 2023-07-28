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
        <MainScreen options={{ showHeader: false, title: "islamic center cms" }}>
            <View style={{ marginTop: 32 }}>
                <AddSth
                    sentence="create a new room"
                    onPress={() => { navigation.navigate("Home") }}
                />
                <View style={{ marginBottom: 20,marginTop: -4 }}>
                    {rooms.map((room, index) => (
                        <RoomCard key={index} title={room.title} members={room.members}/>
                    ))}
                </View>
            </View>
        </MainScreen>
    )
}
export default RoomView;
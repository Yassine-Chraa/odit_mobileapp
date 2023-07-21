import { Text, View, ScrollView } from "react-native"
import MainScreen from "../../components/main/MainScreen";
import globalStyles from "../../style";
import { getColors } from "../../style/theme/globalTheme";
import AddSth from "../../components/main/AddSth";
import { rooms } from "../../data/rooms";
import RoomMemberCard from "../../components/Room/RoomMembersCard";


const RoomDetails = ({ navigation }: any): JSX.Element => {
    const { largeTextColor } = getColors()
    const room = rooms[0]

    return (
        <MainScreen>
            <View style={{marginBottom: 24}}>
                <Text style={[globalStyles.pageTitle, { color: largeTextColor }]}>{room.title}</Text>
                <View style={{ marginTop: 20 }}>
                    <AddSth
                        sentence="Add a new member"
                        onPress={() => { navigation.navigate("Room") }}
                    />
                </View>
                <View style={{ marginTop: 10, paddingBottom: 20 }}>
                    <RoomMemberCard members={room.members} />
                </View>
                <View style={{ marginTop: 20 }}>
                    <AddSth
                        sentence="Add a new Task"
                        onPress={() => { navigation.navigate("Room") }}
                    />
                </View>
            </View>
        </MainScreen>
    )
}
export default RoomDetails;
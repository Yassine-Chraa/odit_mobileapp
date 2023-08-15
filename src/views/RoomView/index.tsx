import { Text, View, ScrollView } from "react-native"
import MainScreen from "../../components/main/MainScreen";
import AddSth from "../../components/main/AddSth";
import RoomCard from "../../components/Room/RoomCard";
import { IRoom } from "../../types/IRoom";
import { useSelector } from "react-redux";
import { IProject } from "../../types/IProject";


const RoomView = ({ navigation, route }: any): JSX.Element => {
    const { id, rooms } = useSelector(
        (state: { project: IProject }) => state.project,
    );

    return (
        <MainScreen options={{ showHeader: false, title: "islamic center cms" }}>
            <View style={{ marginTop: 32 }}>
                <AddSth
                    sentence="create a new room"
                    onPress={() => { navigation.navigate("AddRoom", { projectId: id }) }}
                />
                <View style={{ marginBottom: 20, marginTop: -4 }}>
                    {rooms?.map((room: IRoom, index: number) => (
                        <RoomCard key={index} id={room.id} name={room.name!} members={room.members!} />
                    ))}
                </View>
            </View>
        </MainScreen>
    )
}
export default RoomView;
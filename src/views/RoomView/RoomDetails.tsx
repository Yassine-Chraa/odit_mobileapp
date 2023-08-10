import { Text, View, ScrollView } from "react-native"
import MainScreen from "../../components/main/MainScreen";
import globalStyles from "../../style";
import { getColors } from "../../style/theme/globalTheme";
import AddSth from "../../components/main/AddSth";
import RoomMemberCard from "../../components/Room/RoomMembersCard";
import TaskForm from "../../components/Task/TaskForm";
import useTaskController from "../../viewcontrollers/useTaskController";
import Modal from 'react-native-modal'
import useSectionController from "../../viewcontrollers/useSectionController";
import { useEffect } from "react";

const RoomDetails = ({ navigation, route }: any): JSX.Element => {
    const { room } = route.params
    const { showForm, openForm, closeForm } = useTaskController()
    const { sections, getSections } = useSectionController()

    console.log(room)
    useEffect(() => {
        getSections(room.id)
    }, [room.id])

    return (
        <MainScreen options={{
            showHeader: false,
            title: room.name
        }}>
            <View style={{ marginBottom: 24 }}>
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
                        onPress={openForm}
                    />
                </View>
            </View>
            <Modal
                style={globalStyles.modal}
                isVisible={showForm}
                backdropOpacity={0.7}
                swipeDirection={["down", "up"]}
                onSwipeMove={(v) => {
                    if (v < 0.4) {
                        closeForm()
                    }
                }}
            >
                <TaskForm buttonFunction={closeForm} />
            </Modal>
        </MainScreen>
    )
}
export default RoomDetails;
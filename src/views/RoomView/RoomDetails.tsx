import { Text, View, ScrollView, FlatList, TouchableOpacity, Dimensions } from "react-native"
import MainScreen from "../../components/main/MainScreen";
import globalStyles from "../../style";
import { getColors, getFontSize } from "../../style/theme/globalTheme";
import AddSth from "../../components/main/AddSth";
import RoomMemberCard from "../../components/Room/RoomMembersCard";
import TaskForm from "../../components/Task/TaskForm";
import useTaskController from "../../viewcontrollers/useTaskController";
import Modal from 'react-native-modal'
import useSectionController from "../../viewcontrollers/useSectionController";
import { useEffect } from "react";
import taskStyles from "../../style/taskStyles";
import CustomIcon from "../../components/main/CustomIcon";
import TaskCard from "../../components/Task/TaskCard";
import CustomTextInput from "../../components/auth/CustomTextInput";
import profileStyles from "../../style/profileStyles";
import Toast from "react-native-toast-message";

const RoomDetails = ({ navigation, route }: any): JSX.Element => {
    const { secondaryTextColor, surfaceColor, primaryTextColor, largeTextColor } = getColors()
    const { room } = route.params
    const width = Dimensions.get('screen').width - 96;
    const { sections, showForm, showSectionForm, getSections, sectionRequest, setShowSectionForm, createSection, setSectionRequest, setShowForm } = useSectionController()
    useEffect(() => {
        getSections(room.id)
        console.log('ok')
    }, [room.id,showForm])

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
                        sentence="Add new Task"
                        onPress={() => setShowForm(true)}
                    />
                </View>
                <FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={sections}
                    ListFooterComponent={() => {
                        return (
                            <View style={[globalStyles.card, { width: width + 40, marginHorizontal: 8, marginBottom: 20, marginTop: 20, backgroundColor: surfaceColor }]}>
                                <TouchableOpacity
                                    style={taskStyles.section}
                                    activeOpacity={0.5}

                                    onPress={() => setShowSectionForm(true)}>
                                    <Text style={[taskStyles.sectionText, { color: secondaryTextColor }]}>Add New Section</Text>
                                    <View style={{ marginLeft: 'auto' }}>
                                        <CustomIcon focused name="plus" size={28} />
                                    </View>
                                </TouchableOpacity>
                            </View>
                        )
                    }}
                    renderItem={({ item }) => {
                        return (
                            <View style={[globalStyles.card, { width, marginHorizontal: 8, marginBottom: 20, marginTop: 20, backgroundColor: surfaceColor }]}>
                                <View style={taskStyles.section}>
                                    <Text style={[taskStyles.sectionText, { color: secondaryTextColor }]}>{item.name}</Text>
                                    <TouchableOpacity activeOpacity={0.5}>
                                        <CustomIcon name="down" />
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    {
                                        item.tasks?.map((task, index) => (
                                            <TaskCard navigation={navigation} task={task} key={index} />
                                        ))
                                    }
                                </View>
                            </View>
                        )
                    }}
                />
            </View>
            <Modal
                style={globalStyles.modal}
                isVisible={showForm}
                backdropOpacity={0.7}
                swipeDirection={["down", "up"]}
                onSwipeMove={(v) => {
                    if (v < 0.4) {
                        setShowForm(false)
                    }
                }}
            >
                <TaskForm sections={sections} roomId={room.id} setShowForm={setShowForm} />
                <Toast />
            </Modal>
            <Modal
                isVisible={showSectionForm}
                backdropOpacity={0.4}
                animationOutTiming={1000}
            >
                <View style={[globalStyles.card, { backgroundColor: surfaceColor }]}>
                    <Text style={[profileStyles.SemiBoldText, { color: largeTextColor, marginBottom: 7 }]}>Add New Section</Text>
                    <CustomTextInput
                        placeholder="Section Name"
                        value={sectionRequest.name}
                        setValue={(v) => setSectionRequest((prev) => {
                            return { ...prev, name: v }
                        })} />
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end', gap: 24, marginTop: 8 }}>
                        <Text
                            style={[profileStyles.mediumText, { color: primaryTextColor }]}
                            onPress={() => setShowSectionForm(false)}
                        >Close</Text>
                        <Text
                            style={[profileStyles.mediumText, { color: secondaryTextColor }]}
                            onPress={() => createSection(room.id)}
                        >Save</Text>
                    </View>
                </View>
            </Modal>
        </MainScreen>
    )
}
export default RoomDetails;
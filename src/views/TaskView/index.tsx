import { Dimensions, Platform, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native"
import MainScreen from "../../components/main/MainScreen";
import globalStyles from "../../style";
import { getColors, getFontSize } from "../../style/theme/globalTheme";
import TaskCard from "../../components/Task/TaskCard";
import taskStyles from "../../style/taskStyles";
import CustomIcon from "../../components/main/CustomIcon";
import AddSth from "../../components/main/AddSth";
import Modal from "react-native-modal";
import { useState } from "react";
import { Image } from "@rneui/themed";
import CustomTextInput from "../../components/auth/CustomTextInput";

const TaskView = ({ navigation }: any) => {
    const [showForm, setShowForm] = useState(true)
    const { largeTextColor, secondaryTextColor, backgroundColor, primaryTextColor } = getColors();
    const tasks: Array<{ deadline: string, name: string }> = [
        {
            name: "user persona interviews",
            deadline: "24/07/2023",
        },
        {
            name: "user persona interviews",
            deadline: "24/07/2023"
        },
        {
            name: "user persona interviews",
            deadline: "24/07/2023"
        }
    ]
    return (
        <MainScreen>
            <Text style={[globalStyles.pageTitle, { color: largeTextColor }]}>your islamic center cms</Text>
            <AddSth
                sentence="create a new task"
                onPress={() => { navigation.navigate("Home") }}
            />
            <View style={[globalStyles.card, { marginBottom: 20, marginTop: 14 }]}>
                <View style={taskStyles.section}>
                    <Text style={[taskStyles.sectionText, { color: secondaryTextColor }]}>To Do</Text>
                    <TouchableOpacity activeOpacity={0.5}>
                        <CustomIcon focused={false} name="down" />
                    </TouchableOpacity>
                </View>
                <View>
                    {
                        tasks.map((task, index) => (
                            <TaskCard navigation={navigation} task={task} key={index} />
                        ))
                    }
                </View>
            </View>
            <Modal
                style={globalStyles.modal}
                isVisible={showForm}
                backdropOpacity={0.7}
                swipeDirection="down"
                backdropTransitionInTiming={40}
            >
                <View style={[globalStyles.modalContent, { backgroundColor }]}>
                    <View style={globalStyles.swipeButton}></View>
                    <View style={[globalStyles.mainScreen]}>
                    <Text style={[globalStyles.pageTitle, { color: largeTextColor }]}>Create New Task</Text>
                        <CustomTextInput type="task name" placeholder="Task Name" inputRule="maximum 30 characters" />
                        <CustomTextInput type="task description" placeholder="Give a description about task" />
                        <View style={{ flexDirection: 'row', alignItems: 'center', columnGap: 8 }}>
                            <Image source={require('../../assets/images/profile.png')} style={{ width: 34, height: 34, borderRadius: 17 }} />
                            <View>
                                <Text style={{ color: primaryTextColor, fontFamily: 'Nunito-Meduim', fontSize: getFontSize('h6') }}>Assigned to</Text>
                                <Text style={{ color: primaryTextColor, fontFamily: 'Nunito-Bold', fontSize: getFontSize('h6') }}>yassinechraa1@gmail.com</Text>
                            </View>
                        </View>
                    </View>

                </View>
            </Modal>
        </MainScreen>
    )
}
export default TaskView;
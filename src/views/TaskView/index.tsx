import { Dimensions, Platform, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native"
import MainScreen from "../../components/main/MainScreen";
import globalStyles from "../../style";
import { getColors } from "../../style/theme/globalTheme";
import TaskCard from "../../components/Task/TaskCard";
import taskStyles from "../../style/taskStyles";
import CustomIcon from "../../components/main/CustomIcon";
import AddSth from "../../components/main/AddSth";
import Modal from "react-native-modal";
import { useState } from "react";
import { TouchableWithoutFeedback } from "react-native";

const TaskView = ({ navigation }: any) => {
    const [showForm, setShowForm] = useState(true)
    const { largeTextColor, secondaryTextColor, backgroundColor, actionColor } = getColors();
    const deviceWidth = Dimensions.get("window").width;
    const deviceHeight =
        Platform.OS === "ios"
            ? Dimensions.get("window").height
            : require("react-native-extra-dimensions-android").get(
                "REAL_WINDOW_HEIGHT"
            );
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
                <View style={{backgroundColor,borderRadius: 16,height: '95%'}}>
                    <View style={globalStyles.swipeButton}></View>
                    <View style={[globalStyles.mainScreen]}>

                        <View>
                            <TextInput placeholder="Task name" />
                        </View>
                    </View>
                </View>
            </Modal>
        </MainScreen>
    )
}
export default TaskView;
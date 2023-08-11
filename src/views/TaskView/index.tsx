import { Dimensions, FlatList, Text, TouchableOpacity, View } from "react-native"
import MainScreen from "../../components/main/MainScreen";
import globalStyles from "../../style";
import { getColors } from "../../style/theme/globalTheme";
import TaskCard from "../../components/Task/TaskCard";
import taskStyles from "../../style/taskStyles";
import CustomIcon from "../../components/main/CustomIcon";
import AddSth from "../../components/main/AddSth";
import Modal from "react-native-modal";
import useTaskController from "../../viewcontrollers/useTaskController";
import TaskForm from "../../components/Task/TaskForm";

const TaskView = ({ navigation }: any) => {
    const { showForm, openForm, closeForm } = useTaskController()
    const { secondaryTextColor, surfaceColor } = getColors();
    const width = Dimensions.get('screen').width - 96;
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
        <MainScreen options={{ showHeader: false, title: "islamic center cms" }}>
            <View style={{ marginTop: 32 }}>
                <AddSth
                    sentence="create a new task"
                    onPress={openForm}
                />
                <FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={['To Do', 'In Progress', 'Done']}
                    renderItem={({ item }) => {
                        return (
                            <View style={[globalStyles.card, { width, marginHorizontal: 8, marginBottom: 20, marginTop: 20, backgroundColor: surfaceColor }]}>
                                <View style={taskStyles.section}>
                                    <Text style={[taskStyles.sectionText, { color: secondaryTextColor }]}>{item}</Text>
                                    <TouchableOpacity activeOpacity={0.5}>
                                        <CustomIcon name="down" />
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
                        )
                    }} />
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
export default TaskView;
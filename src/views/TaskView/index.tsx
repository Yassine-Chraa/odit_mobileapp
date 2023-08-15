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
import useSectionController from "../../viewcontrollers/useSectionController";
import { ITask } from "../../types/ITask";

const TaskView = ({ navigation, route }: any) => {
    const { secondaryTextColor, surfaceColor } = getColors();
    const { tasks, projectName } = route.params;
    return (
        <MainScreen options={{ showHeader: false, title: projectName||"My Tasks" }}>
            <View style={[globalStyles.card, { marginBottom: 20, marginTop: 32, backgroundColor: surfaceColor }]}>
                <View style={taskStyles.section}>
                    <Text style={[taskStyles.sectionText, { color: secondaryTextColor }]}>To Do</Text>
                    <TouchableOpacity activeOpacity={0.5}>
                        <CustomIcon name="down" />
                    </TouchableOpacity>
                </View>
                <View>
                    {
                        tasks?.map((task: ITask, index: number) => (
                            <TaskCard navigation={navigation} task={task} key={index} />
                        ))
                    }
                </View>
            </View>
        </MainScreen>
    )
}
export default TaskView;
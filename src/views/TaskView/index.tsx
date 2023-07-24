import { ScrollView, Text, TouchableOpacity, View } from "react-native"
import MainScreen from "../../components/main/MainScreen";
import globalStyles from "../../style";
import { getColors } from "../../style/theme/globalTheme";
import TaskCard from "../../components/Task/TaskCard";
import taskStyles from "../../style/taskStyles";
import CustomIcon from "../../components/main/CustomIcon";

const TaskView = ({ navigation }: any) => {
    const { largeTextColor, secondaryTextColor, surfaceColor } = getColors();
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
            <View style={[globalStyles.card, { marginBottom: 16, backgroundColor: surfaceColor, elevation: 8 }]}>
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

        </MainScreen>
    )
}
export default TaskView;
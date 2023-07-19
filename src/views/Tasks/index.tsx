import { Text, View } from "react-native"
import MainScreen from "../../components/main/MainScreen";
import Task from "../../components/main/Task";

const TasksView = (): JSX.Element => {
    const tasks: Array<{ id: number,deadline: string, name: string }> = [
        {
            id: 1,
            name: "Task1",
            deadline: "24/07/2023"
        }
    ]
    return (
        <View>
            <MainScreen>
                <View>
                    <Text>your islamic center cms</Text>
                    <View>
                        <Text>To Do</Text>
                        {
                            tasks.map((task) => (
                                <Task task={task} />
                            ))
                        }
                    </View>
                </View>
            </MainScreen>
        </View>
    )
}
export default TasksView;
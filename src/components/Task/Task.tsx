import { Text, View } from "react-native"

const Task = ({task}:any): JSX.Element => {
    return (
        <View key={task.id}>
           <Text>{task.deadline}</Text>
           <View>
            <Text>{task.name}</Text>
           </View>
        </View>
    )
}
export default Task;
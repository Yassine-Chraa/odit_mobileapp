import { Text, TouchableOpacity, View } from "react-native"
import MainScreen from "../../components/main/MainScreen";
import globalStyles from "../../style";
import { getColors } from "../../style/theme/globalTheme";
import CustomIcon from "../../components/main/CustomIcon";
import taskStyles from "../../style/taskStyles";
import { Image } from "@rneui/themed";



const TaskDetails = ({ route }: any) => {
    const { secondaryTextColor, largeTextColor, surfaceColor } = getColors();
    const { task } = route.params;

    return (
        <MainScreen options={{ showHeader: false,title: task.projectName }}>
            <View style={[globalStyles.card, { marginBottom: 16, marginTop: 24, rowGap: 24, backgroundColor: surfaceColor }]}>
                <View style={globalStyles.row}>
                    <View style={taskStyles.section}>
                        <Text style={[taskStyles.sectionText, { color: secondaryTextColor }]}>To Do</Text>
                        <TouchableOpacity activeOpacity={0.5}>
                            <CustomIcon name="down" />
                        </TouchableOpacity>
                    </View>
                    <Text style={[taskStyles.deadline, { color: secondaryTextColor }]}>{new Date(task.deadline!).toLocaleDateString()}</Text>
                </View>
                <Text style={[taskStyles.taskName, { color: secondaryTextColor, textTransform: 'capitalize' }]}>{task.name}</Text>
                <Text style={[taskStyles.taskName, { color: largeTextColor, textTransform: 'capitalize' }]}>{task.description}</Text>
                <View>
                    <Text>Assigned Members</Text>
                    <View style={taskStyles.members}>
                        {
                            task.assignedMembers?.map((member:any, index:any) => {
                                return (
                                    <Image key={index} style={{ width: 32, height: 32,borderRadius: 16 }} source={require('../../assets/images/profile.png')} />
                                )
                            })
                        }
                    </View>
                </View>
            </View>
        </MainScreen>
    )
}
export default TaskDetails;
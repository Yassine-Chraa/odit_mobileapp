import { Text, FlatList, Dimensions, TouchableOpacity, View } from "react-native"
import { getColors, getFontSize } from "../../style/theme/globalTheme";
import MainScreen from "../../components/main/MainScreen";
import globalStyles from "../../style";
import NavigateTo from "../../components/Project/navigateTo";
import CustomIcon from "../../components/main/CustomIcon";
import homeStyles from "../../style/homeStyles";
import { Image } from "@rneui/themed";
import taskStyles from "../../style/taskStyles";
import useHomeController from "../../viewcontrollers/useHomeController";
import profileStyles from "../../style/profileStyles";
import useProfileController from "../../viewcontrollers/useProfileController";
import { defaultUserPicture } from "../../data/default";

const HomeView = ({ navigation }: any): JSX.Element => {
    const { largeTextColor, surfaceColor, secondaryTextColor } = getColors();
    const width = Dimensions.get('screen').width;

    const { projects, tasks } = useHomeController();
    const { profile } = useProfileController('others');
    return (
        <MainScreen options={{
            disableScrollView: false,
            showHeader: true,
            picture: profile?.picture || defaultUserPicture
        }}>
            <View style={[globalStyles.sectionHeader, { marginTop: 16 }]}>
                <Text style={[globalStyles.sectionTitle, { color: largeTextColor }]}>Your Projects</Text>
                <NavigateTo action={() => navigation.navigate('allProjects')} />
            </View>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ flexDirection: 'row', columnGap: 12, paddingRight: 6 }}
                ListHeaderComponent={() => {
                    return (
                        <TouchableOpacity
                            onPress={() => navigation.navigate("AddProject")}
                            activeOpacity={0.4}
                            style={[globalStyles.card, homeStyles.addCard, { backgroundColor: surfaceColor }]}>
                            <CustomIcon focused name="plus" size={40} />
                            <Text style={[homeStyles.addCardTitle, { color: largeTextColor, }]}>Add New Project</Text>
                        </TouchableOpacity>
                    )
                }}
                data={projects}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            onPress={() => navigation.navigate("ProjectDetails", { projectId: item.id })}
                            activeOpacity={0.6}
                            style={[globalStyles.card, { backgroundColor: surfaceColor, padding: 0, alignItems: 'center' }]}>
                            <Image source={require('../../assets/images/project.jpg')} style={{ width: width / 3, height: 172 }} />
                            <View style={homeStyles.overlay}>
                                <Text style={homeStyles.overlayText}>{item.title}</Text>
                            </View>
                        </TouchableOpacity>
                    )

                }} />

            <View style={[globalStyles.sectionHeader, { marginTop: 16 }]}>
                <Text style={[globalStyles.sectionTitle, { color: largeTextColor }]}>your tasks</Text>
                <NavigateTo action={() => navigation.navigate('Tasks', { tasks })} />
            </View>
            <View style={{ marginBottom: 24 }}>
                {
                    tasks && tasks.length != 0 ? tasks?.map((task, index) => {
                        return (
                            <View key={index} style={[globalStyles.card, { backgroundColor: surfaceColor, elevation: 4, marginTop: 24, marginBottom: 0 }]}>
                                <View style={globalStyles.row}>
                                    <Text style={{ fontFamily: 'Nunito-SemiBold', fontSize: getFontSize('h4'), color: secondaryTextColor }}>To do</Text>
                                    <Text style={[taskStyles.deadline, { color: secondaryTextColor }]}>{new Date(task.deadline!).toLocaleDateString()}</Text>
                                </View>
                                <Text style={[taskStyles.deadline, { color: largeTextColor, marginTop: 16 }]}>{task.projectName}</Text>

                                <View style={[taskStyles.taskBody, { marginBottom: 0, marginTop: 4 }]}>
                                    <Text style={[taskStyles.taskName, { color: largeTextColor }]}>{task.name}</Text>
                                    <TouchableOpacity style={{ elevation: 8 }} onPress={() => navigation.navigate("TaskDetails", { task })}>
                                        <CustomIcon focused name='arrowRight' size={33} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )
                    }) :
                        (
                            <Text style={[profileStyles.SemiBoldText, { marginTop: 32, fontSize: getFontSize('h4'), textAlign: 'center' }]}>You don't have tasks</Text>
                        )
                }
            </View>
        </MainScreen>
    )
}
export default HomeView;
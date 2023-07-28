import { ScrollView, Text, TouchableOpacity, View } from "react-native"
import MainScreen from "../../components/main/MainScreen";
import globalStyles from "../../style";
import { getColors } from "../../style/theme/globalTheme";
import ProjectCard from "../../components/Project/ProjectCard";
import { projects } from "../../data/projects";
import NavigateTo from "../../components/Project/navigateTo";
import { rooms } from "../../data/rooms";
import TaskCard from "../../components/Task/TaskCard";
import { tasks } from "../../data/tasks";
import RoomCard from "../../components/Room/RoomCard";

const ProjectDetails = ({ navigation }: any) => {
    const { largeTextColor, surfaceColor } = getColors();
    const project = projects[0];

    return (
        <MainScreen options={{ showHeader: false, title: "Islamic Center Cms" }}>
            <ProjectCard options={{ pressable: false }} title={project.title} picture={project.picture} description={project.description} />
            <View style={{ marginBottom: 24 }}>
                <View style={{ marginTop: 16 }}>
                    <View style={[globalStyles.sectionHeader]}>
                        <Text style={[globalStyles.sectionTitle, { color: largeTextColor }]}>project members</Text>
                        <NavigateTo action={() => navigation.navigate('ProjectMembers')} />
                    </View>
                    <RoomCard options={{ showHeader: false }} members={rooms[0].members} />
                </View>
                <View style={{ marginTop: 16 }}>
                    <View style={[globalStyles.sectionHeader]}>
                        <Text style={[globalStyles.sectionTitle, { color: largeTextColor }]}>project rooms</Text>
                        <NavigateTo action={() => navigation.navigate('Rooms')} />
                    </View>
                    {
                        rooms.slice(2).map((room, index) => (
                            <RoomCard key={index} title={room.title} members={room.members} />
                        ))
                    }
                </View>
                <View style={{ marginTop: 16 }}>
                    <View style={[globalStyles.sectionHeader]}>
                        <Text style={[globalStyles.sectionTitle, { color: largeTextColor }]}>project tasks</Text>
                        <NavigateTo action={() => navigation.navigate('Tasks')} />
                    </View>
                    <View style={[globalStyles.card, { backgroundColor: surfaceColor, height: 300 }]}>
                        {
                            tasks.map((task, index) => (
                                <TaskCard key={index} navigation={navigation} task={task} />
                            ))
                        }
                    </View>
                </View>
            </View>
        </MainScreen>
    )
}
export default ProjectDetails;
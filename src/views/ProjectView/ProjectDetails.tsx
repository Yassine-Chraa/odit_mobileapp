import { ScrollView, Text, TouchableOpacity, View } from "react-native"
import MainScreen from "../../components/main/MainScreen";
import globalStyles from "../../style";
import { getColors } from "../../style/theme/globalTheme";
import ProjectCard from "../../components/Project/ProjectCard";
import { projects } from "../../data/projects";
import projectStyles from "../../style/projectStyles";
import NavigateTo from "../../components/Project/navigateTo";
import { rooms } from "../../data/rooms";
import ProjectMemberCard from "../../components/Project/ProjectMemberCard";
import TaskCard from "../../components/Task/TaskCard";
import { tasks } from "../../data/tasks";
import RoomCard from "../../components/Room/RoomCard";

const ProjectDetails = ({ navigation }: any) => {
    const { largeTextColor, secondaryTextColor, surfaceColor } = getColors();
    const project = projects[0];

    return (
        <MainScreen>
            <View style={[{marginBottom: 24}]}>
                <ProjectCard title={project.title} picture={project.picture} description={project.description} navigation={navigation}/>
            </View>
            {/* <View>
                <View style={[projectStyles.sectionHeader, {marginBottom: 16}]}>
                    <Text style={[projectStyles.sectionTitle, {color: largeTextColor}]}>project members</Text>
                    <NavigateTo action={() => navigation.navigate('projectMemebers')}/>
                </View>
                <View style={[globalStyles.card, {backgroundColor: surfaceColor, height: 150}]}>
                    <ScrollView>
                        <ProjectMemberCard members={room.members}/>
                    </ScrollView>
                </View>
            </View> */}
            <View>
                <View style={[projectStyles.sectionHeader, {marginBottom: 16}]}>
                    <Text style={[projectStyles.sectionTitle, {color: largeTextColor}]}>project rooms</Text>
                    <NavigateTo action={() => navigation.navigate('Rooms')}/>
                </View>
                <View style={[globalStyles.card, {backgroundColor: surfaceColor, height: 300}]}>
                    <ScrollView>
                    {
                            rooms.map((room, index) => (
                                <RoomCard key={index} title={room.title} members={room.members} navigation={navigation} />
                            ))
                        }
                    </ScrollView>
                </View>
            </View>
            <View>
                <View style={[projectStyles.sectionHeader, {marginBottom: 16}]}>
                    <Text style={[projectStyles.sectionTitle, {color: largeTextColor}]}>project tasks</Text>
                    <NavigateTo action={() => navigation.navigate('Tasks')}/>
                </View>
                <View style={[globalStyles.card, {backgroundColor: surfaceColor, height: 300}]}>
                    <ScrollView>
                        {
                            tasks.map((task, index) => (
                                <TaskCard navigation={navigation} task={task}/>
                            ))
                        }
                    </ScrollView>
                </View>
            </View>
            
        </MainScreen>
    )
}
export default ProjectDetails;
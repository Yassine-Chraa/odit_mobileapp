import { useEffect } from 'react'
import { Text, View } from "react-native"
import MainScreen from "../../components/main/MainScreen";
import globalStyles from "../../style";
import { getColors, getFontSize } from "../../style/theme/globalTheme";
import ProjectCard from "../../components/Project/ProjectCard";
import NavigateTo from "../../components/Project/navigateTo";
import TaskCard from "../../components/Task/TaskCard";
import RoomCard from "../../components/Room/RoomCard";
import useProjectController from "../../viewcontrollers/useProjectController";
import profileStyles from '../../style/profileStyles';

const ProjectDetails = ({ navigation, route }: any) => {
    const { largeTextColor, surfaceColor } = getColors();
    const { project, getProject } = useProjectController()
    const { projectId } = route.params;
    useEffect(() => {
        getProject(projectId)
    }, [projectId])
    return (
        <MainScreen options={{ showHeader: false, title: project.title }} backPath='Home'>
            <ProjectCard
                options={{ pressable: false }}
                project={project} />
            <View style={{ marginBottom: 24 }}>
                <View style={{ marginTop: 16 }}>
                    <View style={[globalStyles.sectionHeader]}>
                        <Text style={[globalStyles.sectionTitle, { color: largeTextColor }]}>project members</Text>
                        <NavigateTo action={() => navigation.navigate('ProjectMembers', { members: project.members })} />
                    </View>
                    <RoomCard options={{ showHeader: false }} members={project.members} />
                </View>
                <View style={{ marginTop: 16 }}>
                    <View style={[globalStyles.sectionHeader]}>
                        <Text style={[globalStyles.sectionTitle, { color: largeTextColor }]}>project rooms</Text>
                        <NavigateTo action={() => navigation.navigate('Rooms')} />
                    </View>
                    {
                        project.rooms?.slice(0, 2).map((room, index) => {
                            return (
                                <RoomCard key={index} id={room.id} name={room.name!} members={room.members!} />
                            )
                        })
                    }
                </View>
                <View style={{ marginTop: 16 }}>
                    <View style={[globalStyles.sectionHeader]}>
                        <Text style={[globalStyles.sectionTitle, { color: largeTextColor }]}>project tasks</Text>
                        <NavigateTo action={() => navigation.navigate('Tasks',{projectName:project.title ,tasks:project.tasks})} />
                    </View>
                    {project.tasks?.length != 0 ?
                        <View style={[globalStyles.card, { backgroundColor: surfaceColor }]}>
                            {
                                project.tasks?.slice(0,3).map((task, index) => (
                                    <TaskCard key={index} navigation={navigation} task={task} />
                                ))
                            }
                        </View> : (
                            <Text style={[profileStyles.SemiBoldText, { marginTop: 32, fontSize: getFontSize('h4'), textAlign: 'center' }]}>No task found</Text>
                        )}
                </View>
            </View>
        </MainScreen>
    )
}
export default ProjectDetails;
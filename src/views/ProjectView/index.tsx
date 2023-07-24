import { ScrollView, Text, TouchableOpacity, View } from "react-native"
import MainScreen from "../../components/main/MainScreen";
import globalStyles from "../../style";
import { getColors } from "../../style/theme/globalTheme";
import ProjectCard from "../../components/Project/ProjectCard";
import { projects } from "../../data/projects";
const ProjectView = ({ navigation }: any) => {
    const { largeTextColor, secondaryTextColor } = getColors();
    
    return (
        <MainScreen>
            <View style={[{marginBottom: 32}]}>
                <Text style={[globalStyles.pageTitle ,{color: largeTextColor}]}>All Your Projects</Text>
                {
                    projects.map((project, index) => (
                        <ProjectCard key={index} title={project.title} picture={project.picture} description={project.description} navigation={navigation}/>
                    ))
                }
            </View>
        </MainScreen>
    )
}
export default ProjectView;
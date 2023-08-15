import { Text, View } from "react-native"
import MainScreen from "../../components/main/MainScreen";
import globalStyles from "../../style";
import { getColors } from "../../style/theme/globalTheme";
import ProjectCard from "../../components/Project/ProjectCard";
import useHomeController from "../../viewcontrollers/useHomeController";
const ProjectView = ({ navigation }: any) => {
    const { largeTextColor } = getColors();
    const { projects } = useHomeController()
    return (
        <MainScreen>
            <View style={[{ marginBottom: 32 }]}>
                <Text style={[globalStyles.pageTitle, { color: largeTextColor }]}>All Your Projects</Text>
                {
                    projects?.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))
                }
            </View>
        </MainScreen>
    )
}
export default ProjectView;
import { Text, TextInput, TouchableOpacity, View } from "react-native"
import { getColors } from "../../style/theme/globalTheme";
import globalStyles from "../../style";
import projectStyles from "../../style/projectStyles";
import { Image } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { IProject } from "../../types/IProject";
interface ProjectCardProps {
    project:IProject
    options?: {
        pressable: boolean
    }
}
const ProjectCard: React.FC<ProjectCardProps> = ({ project, options = { pressable: true } }) => {
    const navigation: any = useNavigation();
    const { surfaceColor, largeTextColor, primaryTextColor } = getColors();
    if(options.pressable){
        return (
            <TouchableOpacity
            activeOpacity={0.4}
                onPress={() => navigation.navigate("ProjectDetails",{projectId: project.id})}
                style={[projectStyles.container, globalStyles.card, { backgroundColor: surfaceColor }]} >
                <Text style={[projectStyles.title, { color: largeTextColor }]}>{project.title}</Text>
                <Image containerStyle={{ elevation: 8, backgroundColor: surfaceColor }} source={require('../../assets/images/project.jpg')} style={[projectStyles.projectImage]} />
                <Text style={[projectStyles.description, { color: primaryTextColor }]}>{project.description}</Text>
            </TouchableOpacity>
        )
    }else{
        return (
            <View
                style={[projectStyles.container, globalStyles.card, { backgroundColor: surfaceColor }]} >

                <Image containerStyle={{ elevation: 8, backgroundColor: surfaceColor }} source={require('../../assets/images/project.jpg')} style={[projectStyles.projectImage]} />
                <Text style={[projectStyles.description, { color: primaryTextColor }]}>{project.description}</Text>
            </View>
        )
    }

}
export default ProjectCard;


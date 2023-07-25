import { Text, TextInput, TouchableOpacity, View } from "react-native"
import { getColors } from "../../style/theme/globalTheme";
import globalStyles from "../../style";
import projectStyles from "../../style/projectStyles";
import { Image } from "@rneui/themed";
interface ProjectCardProps {
    title: string;
    picture: any;
    description: string;
    navigation: any;
}
const ProjectCard: React.FC<ProjectCardProps> = ({ title, picture, description, navigation }) => {
    const { surfaceColor, largeTextColor, primaryTextColor } = getColors();
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate("ProjectDetails")}
            style={[projectStyles.container, globalStyles.card, { backgroundColor: surfaceColor }]} >
            <Text style={[projectStyles.title, { color: largeTextColor }]}>{title}</Text>
            <Image containerStyle={{ elevation: 8 ,backgroundColor: surfaceColor}} source={picture} style={[projectStyles.projectImage]} />
            <Text style={[projectStyles.description, { color: primaryTextColor }]}>{description}</Text>
        </TouchableOpacity>
    )

}
export default ProjectCard;


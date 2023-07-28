import { Text, TextInput, TouchableOpacity, View } from "react-native"
import { getColors } from "../../style/theme/globalTheme";
import globalStyles from "../../style";
import projectStyles from "../../style/projectStyles";
import { Image } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
interface ProjectCardProps {
    title: string;
    picture: any;
    description: string;
    options?: {
        pressable: boolean
    }
}
const ProjectCard: React.FC<ProjectCardProps> = ({ title, picture, description, options = { pressable: true } }) => {
    const navigation: any = useNavigation();
    const { surfaceColor, largeTextColor, primaryTextColor } = getColors();
    if(options.pressable){
        return (
            <TouchableOpacity
                onPress={() => navigation.navigate("ProjectDetails")}
                style={[projectStyles.container, globalStyles.card, { backgroundColor: surfaceColor }]} >
                <Text style={[projectStyles.title, { color: largeTextColor }]}>{title}</Text>
                <Image containerStyle={{ elevation: 8, backgroundColor: surfaceColor }} source={picture} style={[projectStyles.projectImage]} />
                <Text style={[projectStyles.description, { color: primaryTextColor }]}>{description}</Text>
            </TouchableOpacity>
        )
    }else{
        return (
            <View
                style={[projectStyles.container, globalStyles.card, { backgroundColor: surfaceColor }]} >

                <Image containerStyle={{ elevation: 8, backgroundColor: surfaceColor }} source={picture} style={[projectStyles.projectImage]} />
                <Text style={[projectStyles.description, { color: primaryTextColor }]}>{description}</Text>
            </View>
        )
    }

}
export default ProjectCard;


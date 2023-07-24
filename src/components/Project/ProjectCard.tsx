import { Text, TextInput, TouchableOpacity, View } from "react-native"
import { getColors } from "../../style/theme/globalTheme";
import globalStyles from "../../style";
import { FullWindowOverlay } from "react-native-screens";
import projectStyles from "../../style/projectStyles";
import { Image, color } from "@rneui/base";
interface ProjectCardProps {
    title: string;
    picture: any;
    description: string;
    navigation: any;
}
const ProjectCard: React.FC<ProjectCardProps> = ({title, picture, description, navigation}) =>{
        const { surfaceColor, largeTextColor, primaryTextColor } = getColors();
        return (
            <View style={projectStyles.container} >
                <View style={[projectStyles.item, {backgroundColor: surfaceColor}]}>
                    <Text style={[projectStyles.title, {color: largeTextColor}]}>{title}</Text>
                </View>
                <View style={projectStyles.item}>
                    <Image source={picture} resizeMode="contain" style={[projectStyles.projectImage]}/>
                </View>
                <View style={projectStyles.item}>
                    <Text style={[{color: primaryTextColor}]}>{description}</Text>
                </View>
        </View>
        )
    
}
export default ProjectCard;


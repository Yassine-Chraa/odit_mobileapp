import { Text, TouchableOpacity } from "react-native"
import { getColors } from "../../style/theme/globalTheme";
import globalStyles from "../../style";
import CustomIcon from "./CustomIcon";

interface CustomButtonProps {
    type?: "auth" | "simple"
    title: string,
    action: () => any,
    icon?: any
}

const CustomButton: React.FC<CustomButtonProps> = ({ type="simple", title, action,icon }): JSX.Element => {
    const { buttonTextColor, buttonBackgroundColor } = getColors();
    return (
        <TouchableOpacity activeOpacity={0.4} onPress={action} style={[globalStyles.customButton, { backgroundColor: buttonBackgroundColor, width: type == 'auth' ? 'auto' : 160 }]}>
            
            <Text style={[globalStyles.customButtonText, {  color: buttonTextColor }]}>{icon && (<CustomIcon name={icon} />)}{" "}{title}</Text>
        </TouchableOpacity>
    )
}
export default CustomButton;
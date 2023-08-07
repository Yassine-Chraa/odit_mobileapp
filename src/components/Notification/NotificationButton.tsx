import { Text, TouchableOpacity } from "react-native"
import { getColors } from "../../style/theme/globalTheme";
import globalStyles from "../../style";
import CustomIcon from "../main/CustomIcon";

interface CustomButtonProps {
    title: string,
    active:Boolean;
    action: () => any
}

const NotifitcationButton: React.FC<CustomButtonProps> = ({  title,active, action }): JSX.Element => {
    const { buttonTextColor,secondarySurfaceColor,surfaceColor } = getColors();
    return (
        <TouchableOpacity activeOpacity={0.4} onPress={action} style={[globalStyles.customButton, { backgroundColor: active ? secondarySurfaceColor: surfaceColor, width: 120 }]}>
            <Text style={[globalStyles.customButtonText, { color: buttonTextColor }]}>{title}{" "}{!active && (<CustomIcon name="dot" />)}</Text>
            
        </TouchableOpacity>
    )
}
export default NotifitcationButton;
import { Text, TouchableOpacity } from "react-native"
import { getColors } from "../../style/theme/globalTheme";
import globalStyles from "../../style";

interface CustomButtonProps {
    type?: "auth" | "simple"
    title: string,
    action: () => any
}

const CustomButton: React.FC<CustomButtonProps> = ({ type="simple", title, action }): JSX.Element => {
    const { buttonTextColor, buttonBackgroundColor } = getColors();
    return (
        <TouchableOpacity activeOpacity={0.4} onPress={action} style={[globalStyles.customButton, { backgroundColor: buttonBackgroundColor, width: type == 'auth' ? 'auto' : 160 }]}>
            <Text style={[globalStyles.customButtonText, { color: buttonTextColor }]}>{title}</Text>
        </TouchableOpacity>
    )
}
export default CustomButton;
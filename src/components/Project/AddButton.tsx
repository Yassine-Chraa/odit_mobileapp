import { Text, TextInput, TouchableOpacity, View } from "react-native"
import { getColors } from "../../style/theme/globalTheme";
import globalStyles from "../../style";

interface AddButtonProps {
    title: string,
    action: () => any
}

const AddButton: React.FC<AddButtonProps> = ({ title, action }): JSX.Element => {
    const { buttonTextColor, buttonBackgroundColor } = getColors();
    return (
        <TouchableOpacity activeOpacity={0.6} onPress={action} style={[globalStyles.customButton, { backgroundColor: buttonBackgroundColor, width: '100%' }]}>
            <Text style={[globalStyles.customButtonText, { color: buttonTextColor }]}>{title}</Text>
        </TouchableOpacity>
    )
}
export default AddButton;
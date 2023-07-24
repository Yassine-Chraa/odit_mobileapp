import { Text, TextInput, TouchableOpacity, View } from "react-native"
import { getColors } from "../../style/theme/globalTheme";
import globalStyles from "../../style";
import { FullWindowOverlay } from "react-native-screens";
const AddButton = ({ title,action }: any): JSX.Element => {
    const { buttonTextColor, buttonBackgroundColor } = getColors();
    return (
        <TouchableOpacity onPress={action} style={[globalStyles.customButton, { backgroundColor: buttonBackgroundColor, width: '100%' }]}>
            <Text style={[globalStyles.customButtonText, { color: buttonTextColor }]}>{title}</Text>
        </TouchableOpacity>
    )
}
export default AddButton;
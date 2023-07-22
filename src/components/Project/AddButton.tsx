import { Text, TextInput, TouchableOpacity, View } from "react-native"
import { getColors } from "../../style/theme/globalTheme";
import globalStyles from "../../style";
const AddButton = ({ type,title,action }: any): JSX.Element => {
    const { buttonTextColor, buttonBackgroundColor } = getColors();
    return (
        <TouchableOpacity onPress={action} style={[globalStyles.customButton, { backgroundColor: buttonBackgroundColor, width: type == 'auth' ? 'auto' : 160 }]}>
            <Text style={[globalStyles.customButtonText, { color: buttonTextColor }]}>{title}</Text>
        </TouchableOpacity>
    )
}
export default AddButton;
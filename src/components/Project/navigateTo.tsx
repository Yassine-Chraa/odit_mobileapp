import { Text, TouchableOpacity, View } from "react-native"
import { getColors } from "../../style/theme/globalTheme";
import CustomIcon from "../main/CustomIcon";
import globalStyles from "../../style";
const NavigateTo = ({ action }: any): JSX.Element => {
    const { additionalInfoColor } = getColors();
    return (
        <TouchableOpacity onPress={action}>
            <View style={globalStyles.row}>
                <Text style={[{color: additionalInfoColor}]}>see all</Text>
                <CustomIcon focused={false} name='arrowRight'/>
            </View>
        </TouchableOpacity>
    )
}
export default NavigateTo;
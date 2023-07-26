import { Text, TouchableOpacity, View } from "react-native"
import { getColors } from "../../style/theme/globalTheme";
import CustomIcon from "../main/CustomIcon";
import globalStyles from "../../style";

interface NavigateToProps {
    action: () => any
}


const NavigateTo: React.FC<NavigateToProps> = ({ action }): JSX.Element => {
    const { additionalInfoColor } = getColors();
    return (
        <TouchableOpacity onPress={action}>
            <View style={globalStyles.row}>
                <Text style={[{ color: additionalInfoColor }]}>see all</Text>
                <CustomIcon name='arrowRight' />
            </View>
        </TouchableOpacity>
    )
}
export default NavigateTo;
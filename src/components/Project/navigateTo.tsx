import { Text, TextInput, TouchableOpacity, View } from "react-native"
import { getColors } from "../../style/theme/globalTheme";
import globalStyles from "../../style";
import { FullWindowOverlay } from "react-native-screens";
import projectStyles from "../../style/projectStyles";
import { Image } from "@rneui/base";
const NavigateTo = ({ action }: any): JSX.Element => {
    const { additionalInfoColor } = getColors();
    const image = require('../../assets/images/arrow-right-small.png');
    return (
        <TouchableOpacity onPress={action} style={[{ width: '100%' }]}>
            <View >
                <Text style={[{color: additionalInfoColor}]}>see all</Text>
                <Image resizeMode="contain" source={image} style={[{width: 20, height: 20}]}/>
            </View>
        </TouchableOpacity>
    )
}
export default NavigateTo;
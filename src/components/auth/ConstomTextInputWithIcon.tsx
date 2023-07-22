import { Text, TextInput, TouchableOpacity, View } from "react-native"
import { getColors } from "../../style/theme/globalTheme";
import globalStyles from "../../style";
const CustomTextInputWithIcon = ({ type, placeholder, inputRule, disableMargin }: any): JSX.Element => {
    const { largeTextColor, secondaryTextColor, additionalInfoColor } = getColors();

    return (
        <View style={globalStyles.customTextInput}>
            <Text style={[globalStyles.textInputLable, { color: largeTextColor }]}>{type}</Text>
            <View style={[globalStyles.borderBottom, {borderBottomColor: additionalInfoColor}]}>
                <TextInput
                    secureTextEntry={type == 'password'}
                    placeholder={placeholder}
                    placeholderTextColor={secondaryTextColor}
                    style={[globalStyles.costomTextInputWithIcon,
                    { color: secondaryTextColor,marginBottom: disableMargin?0: 16 }]} />
            </View>
            <Text style={[globalStyles.textInputRule, {color: additionalInfoColor}]}>{inputRule}</Text>
        </View>
    )
}
export default CustomTextInputWithIcon;
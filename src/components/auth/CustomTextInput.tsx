import { Text, TextInput, TouchableOpacity, View } from "react-native"
import { getColors } from "../../style/theme/globalTheme";
import globalStyles from "../../style";
const CustomTextInput = ({ type }: any): JSX.Element => {
    const { largeTextColor, secondaryTextColor, additionalInfoColor } = getColors();

    return (
        <View style={globalStyles.customTextInput}>
            <Text style={[globalStyles.textInputLable, { color: largeTextColor }]}>{type}</Text>
            <TextInput
                secureTextEntry={type == 'password'}
                placeholder={type=="email"?"example@gmail.com":"password"}
                placeholderTextColor={secondaryTextColor}
                style={[globalStyles.textInputplaceHolder,
                { color: secondaryTextColor, borderBottomColor: additionalInfoColor }]} />
        </View>
    )
}
export default CustomTextInput;
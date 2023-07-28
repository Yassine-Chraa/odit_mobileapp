import { Text, TextInput, TouchableOpacity, View } from "react-native"
import { getColors } from "../../style/theme/globalTheme";
import globalStyles from "../../style";
import CustomIcon from "../main/CustomIcon";

interface CustomTextInputProps {
    type?: string,
    placeholder: string,
    inputRule?: string,
    icon?: string,
    buttonAction?: () => any,
    style?: {
        marginBottom: number
    },
    options?: {
        iconRole: "button" | "none"
    }
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({ type, placeholder, inputRule, icon, buttonAction, style, options = { iconRole: "none" } }): JSX.Element => {
    const { largeTextColor, secondaryTextColor, additionalInfoColor, iconsColor } = getColors();

    return (
        <View style={[globalStyles.customTextInput, { ...style }]}>
            {type ? (<Text style={[globalStyles.textInputLable, { color: largeTextColor }]}>{type}</Text>) : null}
            <View >
                <TextInput
                    secureTextEntry={type == 'password'}
                    placeholder={placeholder}
                    placeholderTextColor={secondaryTextColor}
                    style={[globalStyles.textInputplaceHolder,
                    { color: secondaryTextColor, borderBottomColor: additionalInfoColor, marginBottom: inputRule ? 8 : 0 }]} />
                {
                    icon ? (
                        <TouchableOpacity activeOpacity={options.iconRole == "button" ? 0.3 : 1} onPress={options.iconRole == "button" ? buttonAction : undefined} style={[globalStyles.row, globalStyles.customInputIcon, { borderWidth: options.iconRole == "button" ? 1 : 0, borderColor: iconsColor, transform: [{ translateY: inputRule ? -5 : -1 }] }]}>
                            <CustomIcon name={icon} size={12} />
                        </TouchableOpacity>
                    ) : null
                }
            </View>
            {inputRule ? <Text style={[globalStyles.textInputRule, { color: additionalInfoColor }]}>{inputRule}</Text> : null}
        </View>
    )
}
export default CustomTextInput;
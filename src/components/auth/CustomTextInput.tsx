import { Text, TextInput, TouchableOpacity, View } from "react-native"
import { getColors } from "../../style/theme/globalTheme";
import globalStyles from "../../style";
import CustomIcon from "../main/CustomIcon";

interface CustomTextInputProps {
    type?: string,
    placeholder: string,
    inputRule?: string,
    icon?: string,
    buttonAction?: (...args: any) => any,
    style?: {
        marginBottom: number
    },
    options?: {
        iconRole: "button" | "none"
    },
    value?: any,
    setValue?: (...args: any) => any
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({ type, placeholder, inputRule, icon, buttonAction, style, options = { iconRole: "none" }, value, setValue }): JSX.Element => {
    const { largeTextColor, secondaryTextColor, additionalInfoColor, iconsColor } = getColors();

    return (
        <View style={[globalStyles.customTextInput, { ...style }]}>
            {type ? (<Text style={[globalStyles.textInputLable, { color: largeTextColor }]}>{type}</Text>) : null}
            <View >
                <TextInput
                    value={value}
                    onChangeText={setValue}
                    secureTextEntry={type == 'password'}
                    placeholder={placeholder}
                    placeholderTextColor={secondaryTextColor}
                    style={[globalStyles.textInputplaceHolder,
                    { color: secondaryTextColor, borderBottomColor: additionalInfoColor, marginBottom: inputRule ? 8 : 0 }]} />
                {
                    icon ? options.iconRole == "button" && (
                        <TouchableOpacity
                            activeOpacity={0.3}
                            onPress={options.iconRole == "button" ? buttonAction : undefined}
                            style={[globalStyles.row, globalStyles.customInputIcon, { transform: [{ translateY: inputRule ? -8 : -4 }], justifyContent: 'center', alignItems: 'center' }]}>
                            <CustomIcon focused name={icon} size={24} />
                        </TouchableOpacity>
                    ) : null
                }
            </View>
            {inputRule ? <Text style={[globalStyles.textInputRule, { color: additionalInfoColor }]}>{inputRule}</Text> : null}
        </View>
    )
}
export default CustomTextInput;
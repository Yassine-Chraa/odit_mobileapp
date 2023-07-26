import { Text, TextInput, TouchableOpacity, View } from "react-native"
import { getColors } from "../../style/theme/globalTheme";
import globalStyles from "../../style";
import CustomIcon from "../main/CustomIcon";

interface CustomTextInputProps {
    type?: string,
    placeholder: string,
    inputRule?: string,
    buttonIcon?: string,
    buttonAction?: () => any,
    style?: {
        marginBottom: number
    }
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({ type, placeholder, inputRule, buttonIcon, buttonAction, style }): JSX.Element => {
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
                    buttonIcon ? (
                        <TouchableOpacity onPress={buttonAction} style={[globalStyles.row, globalStyles.customInputIcon, { borderColor: iconsColor, transform: [{ translateY: inputRule ? -5 : -1 }] }]}>
                            <CustomIcon name={buttonIcon} size={12} />
                        </TouchableOpacity>
                    ) : null
                }
            </View>
            {inputRule ? <Text style={[globalStyles.textInputRule, { color: additionalInfoColor }]}>{inputRule}</Text> : null}
        </View>
    )
}
export default CustomTextInput;
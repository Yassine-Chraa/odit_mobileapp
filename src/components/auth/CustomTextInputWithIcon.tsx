import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { getColors } from "../../style/theme/globalTheme";
import globalStyles from "../../style";
import CustomIcon from "../main/CustomIcon";

interface CustomTextInputWithIconProps {
  type: string;
  placeholder: string;
  inputRule: string;
  disableMargin?: boolean;
  handleAddMembers?: (memberEmail:string) => void;
}

const CustomTextInputWithIcon: React.FC<CustomTextInputWithIconProps> = ({
  type,
  placeholder,
  inputRule,
  disableMargin = false,
  handleAddMembers,
}: CustomTextInputWithIconProps) => {
  const { largeTextColor, secondaryTextColor, additionalInfoColor } =
    getColors();
  const [member, setMember] = useState("");

  const addMember = () => {
    handleAddMembers?.(member); 
    setMember("");
  };

  return (
    <View style={globalStyles.customTextInput}>
      <Text style={[globalStyles.textInputLable, { color: largeTextColor }]}>
        {type}
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          borderBottomColor: additionalInfoColor,
          borderBottomWidth: 1,
        }}
      >
        <TextInput
          secureTextEntry={type === "password"}
          placeholder={placeholder}
          placeholderTextColor={secondaryTextColor}
          value={member}
          onChangeText={setMember}
          style={[
            globalStyles.costomTextInputWithIcon,
            {
              color: secondaryTextColor,
              marginBottom: disableMargin ? 0 : 16,
              flex: 1,
            },
          ]}
        />
        <TouchableOpacity onPress={addMember} style={{ marginBottom: 20 }}>
          <CustomIcon name="plusFocused" size={28} />
        </TouchableOpacity>
      </View>
      <Text style={[globalStyles.textInputRule, { color: additionalInfoColor }]}>
        {inputRule}
      </Text>
    </View>
  );
};

export default CustomTextInputWithIcon;
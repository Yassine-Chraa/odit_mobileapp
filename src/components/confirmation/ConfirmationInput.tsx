import { Text, TextInput, TouchableOpacity, View } from "react-native"
import { getColors } from "../../style/theme/globalTheme";
import globalStyles from "../../style";
import { useState } from 'react'

const ConfirmationInput = (): JSX.Element => {
    const {  borderColor} = getColors();
     const [confirmationCode, setConfirmationCode] = useState('');

  const handleConfirmationCodeChange = (text: string) => {
    if (text.length <= 6) {
      setConfirmationCode(text);
    }
  };

    return (
        <View style={globalStyles.customTextInput}>
      <TextInput
        style={[globalStyles.confirmationInput]}
        value={confirmationCode}
        onChangeText={handleConfirmationCodeChange}
        maxLength={6}
        keyboardType="numeric"
        placeholder="______"

      />
    </View>
    )
}
export default ConfirmationInput;
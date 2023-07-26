import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import globalStyles from '../../style';
import { getColors } from '../../style/theme/globalTheme';
import CustomIcon from './CustomIcon';

interface AddSthProps {
  sentence: string;
  onPress: () => void;
}

const AddSth: React.FC<AddSthProps> = ({ sentence, onPress }) => {
  const { largeTextColor } = getColors()
  return (
    <View style={globalStyles.header}>
      <Text style={[globalStyles.sentence, { color: largeTextColor }]}>{sentence}</Text>
      <TouchableOpacity onPress={onPress}>
        <CustomIcon focused name="plus" size={38} />
      </TouchableOpacity>
    </View>
  );
};

export default AddSth
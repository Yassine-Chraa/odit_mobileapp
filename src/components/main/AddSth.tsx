import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import globalStyles from '../../style';
import TabBarIcon from '../navigation/TabBarIcon';
import { getColors } from '../../style/theme/globalTheme';

interface AddSthProps {
  sentence: string;
  onPress: () => void;
}

const AddSth: React.FC<AddSthProps> = ({ sentence, onPress }) => {
    const { largeTextColor } = getColors()
  return (
    <View style={globalStyles.header}>
      <Text style={[globalStyles.sentence,{color:largeTextColor}]}>{sentence}</Text>
      <TouchableOpacity onPress={onPress}>
        <TabBarIcon name={'addproject'}  focused={true} width={20} height={20}/>
      </TouchableOpacity>
    </View>
  );
};

export default AddSth
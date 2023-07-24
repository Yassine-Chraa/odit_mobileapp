
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import roomStyles from '../../style/roomStyles';
import { getColors } from '../../style/theme/globalTheme';
import CustomIcon from '../main/CustomIcon';
import globalStyles from '../../style';
interface RoomCardProps {
  title: string;
  members: Array<{
    name: string;
    picture: any;
  }>;
  navigation: any;
}

const RoomCard: React.FC<RoomCardProps> = ({ title, members, navigation }) => {
  const { borderColor, secondaryTextColor, largeTextColor, surfaceColor } = getColors()
  return (
    <View style={[globalStyles.card, {backgroundColor: surfaceColor}]}>
      <View style={roomStyles.header}>
        <Text style={[roomStyles.title, { color: secondaryTextColor }]}>{title}</Text>
        <TouchableOpacity style={{ elevation: 8 }} onPress={() => navigation.navigate("RoomDetails")}>
          <CustomIcon focused name='arrowRight' size={33} />
        </TouchableOpacity>
      </View>
      {members.slice(0, 3).map((member, index) => (
        <View key={index} style={[roomStyles.memberContainer]}>
          <View style={[roomStyles.memberRow, { borderBottomColor: borderColor }]}>
            <Image source={member.picture} style={roomStyles.memberPicture} />
            <Text style={[roomStyles.memberName, { color: largeTextColor }]}>{member.name}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default RoomCard
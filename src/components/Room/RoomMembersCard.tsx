
import React from 'react';
import { View, Text, Image } from 'react-native';
import roomStyles from '../../style/roomStyles';
import { getColors } from '../../style/theme/globalTheme';
import globalStyles from '../../style';

interface RoomCardProps {
  members: Array<{
    name: string;
    picture: any;
  }>;
}

const RoomMemberCard: React.FC<RoomCardProps> = ({ members }) => {
  const { bordersColor, secondaryTextColor, largeTextColor, surfaceColor } = getColors()
  return (
    <View style={[globalStyles.card, { backgroundColor: surfaceColor }]}>
      <View style={roomStyles.header}>
        <Text style={[roomStyles.title, { color: secondaryTextColor }]}>All Members</Text>
      </View>
      {members.map((member, index) => (
        <View key={index} style={[roomStyles.memberContainer]}>
          <View style={[roomStyles.memberRow, { borderBottomColor: bordersColor }]}>
            <Image source={member.picture} style={roomStyles.memberPicture} />
            <Text style={[roomStyles.memberName, { color: largeTextColor }]}>{member.name}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default RoomMemberCard
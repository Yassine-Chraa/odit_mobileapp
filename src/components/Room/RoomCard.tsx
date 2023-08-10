
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import roomStyles from '../../style/roomStyles';
import { getColors } from '../../style/theme/globalTheme';
import CustomIcon from '../main/CustomIcon';
import globalStyles from '../../style';
import { useNavigation } from '@react-navigation/native';
import { IRoomMember } from '../../types/IRoomMember';
interface RoomCardProps {
  id?: number,
  name: string,
  members: IRoomMember[]
  options?: {
    showHeader: boolean
  }
}

const RoomCard: React.FC<RoomCardProps> = ({ id, name, members, options = { showHeader: true } }) => {
  const navigation: any = useNavigation();
  const { borderColor, secondaryTextColor, largeTextColor, surfaceColor } = getColors()
  return (
    <View style={[globalStyles.card, { backgroundColor: surfaceColor }]}>
      {options?.showHeader ? (
        <View style={roomStyles.header}>
          <Text style={[roomStyles.title, { color: secondaryTextColor }]}>{name}</Text>
          <TouchableOpacity style={{ elevation: 8 }} onPress={() => navigation.navigate("RoomDetails", { room: { id, name, members } })}>
            <CustomIcon focused name='arrowRight' size={33} />
          </TouchableOpacity>
        </View>
      ) : null
      }
      {
        members?.slice(0, 3).map((member, index) => (
          <View key={index} style={[roomStyles.memberContainer]}>
            <View style={[roomStyles.memberRow, { borderBottomColor: borderColor }]}>
              <Image source={require('../../assets/images/profile.png')} style={roomStyles.memberPicture} />
              <Text style={[roomStyles.memberName, { color: largeTextColor }]}>{member.firstName + ' ' + member.lastName}</Text>
            </View>
          </View>
        ))
      }
    </View >
  );
};

export default RoomCard
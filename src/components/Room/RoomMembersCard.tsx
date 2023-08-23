import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import roomStyles from '../../style/roomStyles';
import { getColors, getFontSize } from '../../style/theme/globalTheme';
import globalStyles from '../../style';
import { defaultUserPicture } from '../../data/default';
import { IRoomMember } from '../../types/IRoomMember';
import { IMember } from '../../types/IMember';
import CustomIcon from '../main/CustomIcon';
import RoomMember from './RoomMember';
import profileStyles from '../../style/profileStyles';

interface RoomCardProps {
  members: IRoomMember[] | IMember[];
  type?: 'AddMember' | 'default';
  setSelectedMembers?: any
  handleRemoveMember?: any
}

const RoomMemberCard: React.FC<RoomCardProps> = ({ members, type = 'default', setSelectedMembers, handleRemoveMember }) => {

  const { bordersColor, secondaryTextColor, largeTextColor, surfaceColor } = getColors()

  if (type == 'AddMember') {
    return (
      <View style={[globalStyles.card, { backgroundColor: surfaceColor }]}>
        <View style={roomStyles.header}>
          <Text style={[roomStyles.title, { color: secondaryTextColor }]}>All Members</Text>
        </View>
        {members && members.length > 0 ? members?.map((member, index) => {
          return <RoomMember
            key={index}
            members={members}
            member={member}
            index={index}
            setSelectedMembers={setSelectedMembers}
            handleRemoveMember={handleRemoveMember} />
        }) : (
          <Text style={[profileStyles.SemiBoldText, { marginTop: 32, fontSize: getFontSize('h4'), textAlign: 'center' }]}>Member Not Found</Text>
        )}
      </View>
    );
  } else {
    return (
      <View style={[globalStyles.card, { backgroundColor: surfaceColor }]}>
        <View style={roomStyles.header}>
          <Text style={[roomStyles.title, { color: secondaryTextColor }]}>All Members</Text>
        </View>
        {members && members?.map((member, index) => {
          return (
            (
              <View key={index} style={[roomStyles.memberContainer, globalStyles.row]}>
                <View style={[roomStyles.memberRow, { borderBottomColor: bordersColor }]}>
                  <Image source={{ uri: defaultUserPicture }} style={roomStyles.memberPicture} />
                  <Text style={[roomStyles.memberName, { color: largeTextColor }]}>{member.firstName + ' ' + member.lastName}</Text>
                </View>
              </View>
            ))
        })}
      </View>
    );
  }

};

export default RoomMemberCard
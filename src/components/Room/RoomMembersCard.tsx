import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import roomStyles from '../../style/roomStyles';
import { getColors } from '../../style/theme/globalTheme';
import globalStyles from '../../style';
import { defaultUserPicture } from '../../data/default';
import { IRoomMember } from '../../types/IRoomMember';
import { IMember } from '../../types/IMember';
import CustomIcon from '../main/CustomIcon';

interface RoomCardProps {
  members: IRoomMember[] | IMember[];
  type?: 'AddMember' | 'default';
  setSelectedMembers: any
  handleRemoveMember: any
}

const RoomMemberCard: React.FC<RoomCardProps> = ({ members, type = 'default', setSelectedMembers,handleRemoveMember }) => {

  const { bordersColor, secondaryTextColor, largeTextColor, surfaceColor } = getColors()
  console.log(members)
  return (
    <View style={[globalStyles.card, { backgroundColor: surfaceColor }]}>
      <View style={roomStyles.header}>
        <Text style={[roomStyles.title, { color: secondaryTextColor }]}>All Members</Text>
      </View>
      {members && members?.map((member, index) => {

        const [checked, setChecked] = useState(false);
        const addOrRemoveMember = () => {
          if (!checked) {
            setSelectedMembers((prev: number[]) => {
              return [...prev, members[index].id]
            })
          } else {
            handleRemoveMember(index)
          }
          setChecked(!checked)

        }
        return (
          (
            <View key={index} style={[roomStyles.memberContainer, globalStyles.row]}>
              <View style={[roomStyles.memberRow, { borderBottomColor: bordersColor }]}>
                <Image source={{ uri: defaultUserPicture }} style={roomStyles.memberPicture} />
                <Text style={[roomStyles.memberName, { color: largeTextColor }]}>{member.firstName + ' ' + member.lastName}</Text>
              </View>
              {type == "AddMember" && <TouchableOpacity
                style={[{ borderWidth: 1, borderRadius: 8, padding: 1, borderColor: secondaryTextColor }]}
                activeOpacity={0.4}
                onPress={() => addOrRemoveMember()}>
                <CustomIcon name={checked ? 'check' : 'plus'} size={14} />
              </TouchableOpacity>}
            </View>
          ))

      })}
    </View>
  );
};

export default RoomMemberCard
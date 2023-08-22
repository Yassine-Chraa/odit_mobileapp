import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import roomStyles from '../../style/roomStyles';
import { getColors } from '../../style/theme/globalTheme';
import globalStyles from '../../style';
import { defaultUserPicture } from '../../data/default';
import { IRoomMember } from '../../types/IRoomMember';
import CustomIcon from '../main/CustomIcon';
import { IMember } from '../../types/IMember';

interface RoomMemberCardProps {
    members: IRoomMember[] | IMember[],
    member: IRoomMember | IMember,
    index: number,
    setSelectedMembers: any,
    handleRemoveMember: any
}

const RoomMember: React.FC<RoomMemberCardProps> =
    ({ members, member, index, setSelectedMembers, handleRemoveMember }) => {
        const { bordersColor, largeTextColor, secondaryTextColor } = getColors()

        const [checked, setChecked] = useState(false);
        const addOrRemoveMember = () => {
            if (!checked) {
                setSelectedMembers((prev: number[]) => {
                    return [...prev, members[index]]
                })
            } else {
                handleRemoveMember(index)
            }
            setChecked(!checked)
        }

        return (
            <View style={[roomStyles.memberContainer, globalStyles.row]}>
                <View style={[roomStyles.memberRow, { borderBottomColor: bordersColor }]}>
                    <Image source={{ uri: defaultUserPicture }} style={roomStyles.memberPicture} />
                    <Text style={[roomStyles.memberName, { color: largeTextColor }]}>{member.firstName + ' ' + member.lastName}</Text>
                </View>
                <TouchableOpacity
                    style={[{ borderWidth: 1, borderRadius: 8, padding: 1, borderColor: secondaryTextColor }]}
                    activeOpacity={0.4}
                    onPress={addOrRemoveMember}>
                    <CustomIcon name={checked ? 'check' : 'plus'} size={14} />
                </TouchableOpacity>
            </View>
        )
    }
export default RoomMember;
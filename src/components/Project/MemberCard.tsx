
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import roomStyles from '../../style/roomStyles';
import { getColors } from '../../style/theme/globalTheme';
import globalStyles from '../../style';
import { rooms } from '../../data/rooms';
import CustomIcon from '../main/CustomIcon';
import { useNavigation } from '@react-navigation/native';
import { IMember } from '../../types/IMember';
import { defaultUserPicture } from '../../data/default';

interface MemberCardProps {
    member: IMember
}

const MemberCard: React.FC<MemberCardProps> = ({ member }) => {
    const navigation: any = useNavigation()
    const { largeTextColor, surfaceColor, secondaryTextColor } = getColors()
    return (
        <View style={[globalStyles.card, { backgroundColor: surfaceColor, marginVertical: 8, elevation: 4 }]}>
            <View >
                <View style={globalStyles.row}>
                    <View style={[roomStyles.memberRow, { columnGap: 10 }]}>
                        <Image source={{ uri: defaultUserPicture }} style={{ width: 40, height: 40, borderRadius: 25 }} />
                        <View>
                            <Text style={[roomStyles.memberName, { color: largeTextColor, fontFamily: 'Nunito-Bold' }]}>{member.firstName + ' ' + member.lastName}</Text>
                            <Text style={[roomStyles.memberName, { color: secondaryTextColor, fontFamily: 'Nunito-SemiBold' }]}>{member.role}</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={{ elevation: 8 }} onPress={() => navigation.navigate("MemberDetails")}>
                        <CustomIcon focused name='arrowRight' size={32} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default MemberCard
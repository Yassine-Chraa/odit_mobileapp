
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import roomStyles from '../../style/roomStyles';
import TabBarIcon from '../navigation/TabBarIcon';
import { getColors } from '../../style/theme/globalTheme';

interface RoomCardProps {
  title: string;
  members: Array<{
    name: string;
    picture: any; 
  }>;
  navigation:any;
}

const RoomCard: React.FC<RoomCardProps> = ({ title, members,navigation }) => {
    const { bordersColor,secondaryTextColor,largeTextColor } = getColors()
  return (
    <View style={roomStyles.container}>
      <View style={roomStyles.header}>
        <Text style={[roomStyles.title,{color:secondaryTextColor}]}>{title}</Text>
        <TouchableOpacity style={{elevation:10}} onPress={() => navigation.navigate("RoomDetails")}>
          <TabBarIcon name={'showall'} focused={true} width={20} height={20}  />
        </TouchableOpacity>
      </View>
      {members.slice(0,3).map((member, index) => (
        <View key={index} style={[roomStyles.memberContainer]}>
           <View style={[roomStyles.memberRow,{borderBottomColor:bordersColor}]}>
            <Image source={member.picture} style={roomStyles.memberPicture} />
            <Text style={[roomStyles.memberName,{color:largeTextColor}]}>{member.name}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default RoomCard
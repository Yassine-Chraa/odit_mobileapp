
import React from 'react';
import { View, Text, Image } from 'react-native';
import roomStyles from '../../style/roomStyles';
import { getColors } from '../../style/theme/globalTheme';

interface ProjectMemberCardProps {
  members: Array<{
    name: string;
    picture: any; 
  }>;
}

const ProjectMemberCard: React.FC<ProjectMemberCardProps> = ({  members }) => {
    const { borderColor, secondaryTextColor,largeTextColor } = getColors()
  return (
    <View>
      {members.map((member, index) => (
        <View key={index} style={[roomStyles.memberContainer]}>
           <View style={[roomStyles.memberRow,{borderBottomColor: borderColor}]}>
            <Image source={member.picture} style={roomStyles.memberPicture} />
            <Text style={[roomStyles.memberName,{color:largeTextColor}]}>{member.name}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default ProjectMemberCard
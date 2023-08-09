
import React from 'react';
import { View, Text, Image } from 'react-native';
import roomStyles from '../../style/roomStyles';
import { getColors } from '../../style/theme/globalTheme';
import { IMember } from '../../types/IMember';

interface ProjectMemberCardProps {
  members: Array<IMember>;
}

const ProjectMemberCard: React.FC<ProjectMemberCardProps> = ({  members }) => {
    const { borderColor,largeTextColor } = getColors()
  return (
    <View>
      {members.map((member, index) => (
        <View key={index} style={[roomStyles.memberContainer]}>
           <View style={[roomStyles.memberRow,{borderBottomColor: borderColor}]}>
            <Image source={require('../assets/images/profile.png')} style={roomStyles.memberPicture} />
            <Text style={[roomStyles.memberName,{color:largeTextColor}]}>{'ahmed'}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default ProjectMemberCard
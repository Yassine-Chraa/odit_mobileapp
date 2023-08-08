import React from "react";
import { Invite } from "../../types/IInvite";
import { View,Text } from 'react-native'
import notificationStyles from "../../style/notificationStyles";
import profileStyles from "../../style/profileStyles";
import { Avatar } from 'react-native-elements';
import { getColors } from "../../style/theme/globalTheme";

const getInitialsFromEmail = (email: string) => {
  const parts = email.split('@')[0].split('.');
  const initials = parts.map(part => part.charAt(0).toUpperCase()).join('');
  return initials;
};

const NotificationItem: React.FC<{ notification: Invite }> = ({ notification }) => { 
      const { largeTextColor } = getColors();

  return(
    <View style={notificationStyles.notifItem}>
    <View style={notificationStyles.avatarContainer}>
      <Avatar  
      size="small"
      rounded
        title={getInitialsFromEmail(notification.userEmail)}
      onPress={() => console.log("Works!")}
      activeOpacity={0.4}
      source={{
    uri:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
  }}
      /> 
    </View>
    <View >
      <Text style={[profileStyles.mediumText,{ color: largeTextColor }]}>
        {notification.userEmail} invited you to {notification.project.name}.He is waiting For You To Join
      </Text>
    </View>
  </View>
  )
  };

export default NotificationItem;


import React from 'react';
import { Image,View } from 'react-native';
import tabSTyles from '../../style/tabStyles';
import { getColors } from '../../style/theme/globalTheme';

interface TabBarIconProps {
  name: string;
  focused:Boolean;
  width?:number;
  height?:number;
}

const iconMappings: { [key: string]: any } = {
  home: require('../../assets/images/home.png'),
  notifications: require('../../assets/images/notifications.png'),
  addproject: require('../../assets/images/addproject.png'),
  search: require('../../assets/images/search.png'),
  profile: require('../../assets/images/profile.png'),
  showall: require('../../assets/images/showall.png'),
};

const TabBarIcon: React.FC<TabBarIconProps> = ({ name,focused,width=25,height=25 }) => {
    const { buttonBackgroundColor } = getColors()
  const iconPath = iconMappings[name] || iconMappings['home'];


  return (
    <View style={[focused && tabSTyles.focusedIcon,focused && {backgroundColor: buttonBackgroundColor}]}>
        <Image source={iconPath} style={{width,height}} />
    </View>
  );
};

export default TabBarIcon;
import React from 'react';
import { Image, View } from 'react-native';
import tabSTyles from '../../style/tabStyles';
import { getColors } from '../../style/theme/globalTheme';
import CustomIcon from '../main/CustomIcon';
interface TabBarIconProps {
  name: string;
  focused: boolean;
}

const TabBarIcon: React.FC<TabBarIconProps> = ({ name, focused }) => {
  const profile = require('../../assets/images/profile.png')
  const { buttonBackgroundColor } = getColors()
  let iconName = "";
  switch (name) {
    case "Home":
      iconName = "home"
      break;
    case "Notifications":
      iconName = "bell"
      break;
    case "AddProject":
      iconName = "plus"
      break;
    case "Search":
      iconName = "search"
      break;
    default:
      break;
  }
  if (name == "Profile") return <View style={[focused && tabSTyles.focusedIcon, focused && { backgroundColor: buttonBackgroundColor }]}>
    <Image source={profile} />
  </View>
  if(focused){
    return (
      <CustomIcon focused name={iconName} size={48} />
    );
  }else{
    return (
      <CustomIcon name={iconName} />
    );
  }
};

export default TabBarIcon;
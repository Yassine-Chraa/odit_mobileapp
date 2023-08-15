import React from 'react';
import { View } from 'react-native';
import tabSTyles from '../../style/tabStyles';
import { getColors } from '../../style/theme/globalTheme';
import CustomIcon from '../main/CustomIcon';
import { defaultUserPicture } from '../../data/default';
import { Image } from '@rneui/themed';
interface TabBarIconProps {
  name: string;
  picture?: string;
  focused: boolean;
}

const TabBarIcon: React.FC<TabBarIconProps> = ({ name,picture, focused }) => {
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
    <Image source={{ uri: picture || defaultUserPicture }} style={{ width: 32, height: 32, borderRadius: 16 }} />
  </View>
  if (focused) {
    return (
      <CustomIcon focused name={iconName} size={48} />
    );
  } else {
    return (
      <CustomIcon name={iconName} />
    );
  }
};

export default TabBarIcon;
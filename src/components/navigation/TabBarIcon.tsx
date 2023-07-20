import React from 'react';
import { Image, View } from 'react-native';
import tabSTyles from '../../style/tabStyles';
import { SvgXml } from 'react-native-svg';
import iconMappings from '../../assets/icons';
import { getColors } from '../../style/theme/globalTheme';
interface TabBarIconProps {
  name: string;
  focused: Boolean;
}

const TabBarIcon: React.FC<TabBarIconProps> = ({ name, focused }) => {
  const profile = require('../../assets/images/profile.png')
  const { buttonBackgroundColor } = getColors()
  if (name == "profile") return <View style={[focused && tabSTyles.focusedIcon, focused && { backgroundColor: buttonBackgroundColor }]}>
    <Image source={profile}/>
  </View>
  return (
    <SvgXml xml={focused ? iconMappings[`${name}-focused`] : iconMappings[name]} />
  );
};

export default TabBarIcon;
import React from 'react';
import { SvgXml } from 'react-native-svg';
import iconMappings from '../../assets/icons';
import useProfileController from '../../viewcontrollers/useProfileController';
interface IconProps {
  name: string;
  size?: number;
  focused?: boolean
}

const CustomIcon: React.FC<IconProps> = ({ name, focused = false, size }) => {
  const {darkMode} = useProfileController()
  if (focused) {
    return (
      <SvgXml xml={iconMappings(darkMode)[`${name}Focused`]} width={size} height={size}/>
    );
  } else {
    if (size) {
      return (
        <SvgXml xml={iconMappings(darkMode)[name]} width={size} height={size}/>
      );
    } else {
      return (
        <SvgXml xml={iconMappings(darkMode)[name]}/>
      );
    }
  }

};

export default CustomIcon;
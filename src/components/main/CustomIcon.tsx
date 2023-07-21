import React from 'react';
import { SvgXml } from 'react-native-svg';
import iconMappings from '../../assets/icons';
interface IconProps {
  name: string;
  size?: number;
  focused: boolean
}

const CustomIcon: React.FC<IconProps> = ({ name, focused, size }) => {
  if (focused) {
    return (
      <SvgXml xml={iconMappings[name]} width={size} height={size} />
    );
  }else{
    return (
      <SvgXml xml={iconMappings[name]} />
    );
  }

};

export default CustomIcon;
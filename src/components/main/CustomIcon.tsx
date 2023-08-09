import React from 'react';
import { SvgXml } from 'react-native-svg';
import iconMappings from '../../assets/icons';
import { useSelector } from 'react-redux';
import ISettings from '../../types/ISettings';
interface IconProps {
  name: string;
  size?: number;
  focused?: boolean,
}

const CustomIcon: React.FC<IconProps> = ({ name, focused = false, size}) => {
  const darkMode = useSelector(
    (state: {settings: ISettings}) => state.settings.darkMode,
  );
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
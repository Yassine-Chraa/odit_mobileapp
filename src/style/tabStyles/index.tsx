import {StyleSheet} from 'react-native';

interface TabStylesProps {
  width?: number;
  height?: number;
}

const tabSTyles = StyleSheet.create({
 icon: {
    width: 25,
    height: 25,

  },
  focusedIcon: {
    padding:10,
    borderRadius:40
  },
});

export default tabSTyles;

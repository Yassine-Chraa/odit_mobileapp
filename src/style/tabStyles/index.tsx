import { StyleSheet } from 'react-native';

interface TabStylesProps {
  width?: number;
  height?: number;
}

const tabSTyles = StyleSheet.create({
  focusedIcon: {
    width: 56,
    height: 56,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default tabSTyles;

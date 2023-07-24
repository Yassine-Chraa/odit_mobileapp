import { StyleSheet } from 'react-native';

interface TabStylesProps {
  width?: number;
  height?: number;
}

const tabSTyles = StyleSheet.create({
  focusedIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default tabSTyles;

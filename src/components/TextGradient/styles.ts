import {StyleSheet} from 'react-native';
import {pxScale} from '../../helpers';

export const styles = StyleSheet.create({
  linearStyle: {
    flex: 1,
  },
  textGradient: {
    fontSize: pxScale.fontSize(16),
    fontWeight: '500',
    opacity: 0,
  },
});

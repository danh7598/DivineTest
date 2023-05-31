import {colors} from './../../constant/colors';
import {StyleSheet} from 'react-native';
import {pxScale} from '../../helpers';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: pxScale.hp(54),
    borderRadius: pxScale.wp(16),
    backgroundColor: 'skyblue',
    overflow: 'hidden',
  },
  linearStyle: {
    flex: 1,
    paddingHorizontal: pxScale.wp(16),
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButton: {
    fontSize: pxScale.fontSize(18),
    color: colors['#171D22'],
    fontWeight: '500',
  },
});

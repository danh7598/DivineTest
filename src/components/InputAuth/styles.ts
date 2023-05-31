import {StyleSheet} from 'react-native';
import {pxScale} from '../../helpers';
import {colors} from '../../constant/colors';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
  },
  textTitle: {
    fontSize: pxScale.fontSize(16),
    color: colors['#A7AFB7'],
    marginBottom: pxScale.hp(10),
  },
  viewTextInput: {
    width: '100%',
    backgroundColor: colors['#F0F2F4-94'],
    borderRadius: pxScale.wp(12),
    paddingVertical: pxScale.hp(18),
    paddingHorizontal: pxScale.wp(20),
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    padding: 0,
    color: colors['#777777'],
  },
  textError: {
    fontSize: pxScale.fontSize(14),
    color: colors.red,
    marginTop: pxScale.wp(10),
  },
});

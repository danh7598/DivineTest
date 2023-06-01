import {Platform, StatusBar, StyleSheet} from 'react-native';
import {colors} from '../../constant/colors';
import {SCREEN_WIDTH} from '../../helpers';
import {pxScale} from '../../helpers';

export default StyleSheet.create({
  container: (top: number) => ({
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: pxScale.hp(95),
    paddingHorizontal: pxScale.wp(24),
    width: '100%',
    paddingTop: Platform.OS === 'ios' ? top : StatusBar.currentHeight,
  }),
  groupTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconLeft: {
    height: pxScale.wp(24),
    width: pxScale.wp(24),
    tintColor: colors.white,
    marginLeft: 0,
  },
  textTitle: {
    color: colors.white,
    fontSize: pxScale.fontSize(24),
    fontWeight: '700',
    marginLeft: pxScale.wp(12),
  },
});

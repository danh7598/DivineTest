import {StyleSheet} from 'react-native';
import {pxScale} from '../../helpers';
import {getBottomSpace, getStatusBarHeight} from 'react-native-iphone-x-helper';
import {colors} from '../../constant/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: getStatusBarHeight() + pxScale.hp(24),
    paddingBottom: getBottomSpace() + pxScale.hp(32),
  },
  scrollContainer: {},
  pressableContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  scrollStyle: {
    paddingHorizontal: pxScale.wp(24),
  },
  linearContainer: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    position: 'absolute',
  },
  headerContainer: {
    position: 'absolute',
    top: 0,
  },
  viewForm: {
    justifyContent: 'center',
    marginTop: pxScale.hp(30),
    paddingTop: pxScale.hp(70),
  },
  groupDontHaveAccount: {
    marginTop: pxScale.hp(24),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textDontHaveAccount: {
    fontSize: pxScale.fontSize(16),
    color: colors.white,
    flexDirection: 'row',
  },
  textDontHaveAccountGradient: {
    fontSize: pxScale.fontSize(16),
  },
});

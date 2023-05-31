import {StyleSheet} from 'react-native';
import {pxScale} from '../../helpers';
import {getBottomSpace} from 'react-native-iphone-x-helper';
import {colors} from '../../constant/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  pressableContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  scrollStyle: {
    paddingHorizontal: pxScale.wp(24),
  },
  linearContainer: {
    flex: 1,
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
  textTitleForgotPassword: {
    fontSize: pxScale.fontSize(32),
    fontWeight: 'bold',
    color: colors.white,
    textAlign: 'center',
  },
  textNoteForgot: {
    fontSize: pxScale.fontSize(14),
    color: colors.white,
    textAlign: 'center',
    marginTop: pxScale.hp(12),
    marginBottom: pxScale.hp(78),
  },
  groupDontHaveAccount: {
    marginBottom: getBottomSpace() + pxScale.wp(64),
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

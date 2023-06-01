import {StyleSheet} from 'react-native';
import {pxScale} from '../../helpers';
import {getBottomSpace} from 'react-native-iphone-x-helper';
import {colors} from '../../constant/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linearContainer: {
    flex: 1,
  },
  avatarView: {
    alignItems: 'center',
    marginTop: pxScale.hp(52),
  },
  avatar: {
    width: pxScale.wp(110),
    height: pxScale.wp(110),
  },
  editLinearView: {
    width: pxScale.wp(27),
    height: pxScale.wp(27),
    borderRadius: pxScale.wp(27),
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    right: pxScale.wp(7),
  },
  editIcon: {
    width: pxScale.wp(12),
    height: pxScale.wp(12),
  },
  textName: {
    fontSize: pxScale.fontSize(24),
    lineHeight: pxScale.hp(46),
    color: colors['#F0F2F4-94'],
    fontWeight: '700',
  },
  buttonContainer: {
    marginTop: pxScale.hp(45),
    marginHorizontal: pxScale.wp(25),
  },
  button: {
    marginBottom: pxScale.hp(24),
  },
  linearButton: {
    paddingHorizontal: 0,
  },
  childrenButtonView: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: pxScale.wp(41),
    paddingRight: pxScale.wp(15),
    marginHorizontal: pxScale.wp(16),
  },
  textTitleButton: {
    fontSize: pxScale.fontSize(18),
    color: colors['#171D22'],
    fontWeight: '500',
  },
  iconButton: {
    width: pxScale.wp(24),
    height: pxScale.wp(24),
  },
});

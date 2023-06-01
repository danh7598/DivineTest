import {StyleSheet} from 'react-native';
import {pxScale} from '../../../../helpers';
import {colors} from '../../../../constant/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textLanguage: {
    fontWeight: '400',
    fontSize: pxScale.fontSize(16),
    color: colors.white,
  },
  imgDown: {
    width: pxScale.wp(13),
    height: pxScale.wp(13),
    marginLeft: pxScale.wp(6),
  },
  modalLanguage: {
    backgroundColor: colors.white,
    borderRadius: pxScale.wp(12),
    width: pxScale.wp(100),
    position: 'absolute',
    top: pxScale.hp(30),
    right: pxScale.wp(0),
    zIndex: 6,
  },
  itemLanguage: {
    paddingHorizontal: pxScale.wp(8),
    paddingVertical: pxScale.wp(4),
  },
  textItemLanguage: {
    fontSize: pxScale.fontSize(14),
  },
  imageFlag: {
    width: pxScale.wp(30),
    height: pxScale.hp(30),
    marginLeft: pxScale.wp(20),
  },
});

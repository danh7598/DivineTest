import {StyleSheet} from 'react-native';
import {pxScale} from '../../../../helpers';
import {colors} from '../../../../constant/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  textTitle: {
    fontWeight: 'bold',
    fontSize: pxScale.fontSize(32),
    color: colors.white,
  },
  groupPicker: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageFlag: {
    width: pxScale.wp(30),
    height: pxScale.hp(30),
    marginLeft: pxScale.wp(20),
  },
});

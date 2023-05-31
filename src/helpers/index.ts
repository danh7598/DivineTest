import {Dimensions, Platform} from 'react-native';
import {isIphoneX} from 'react-native-iphone-x-helper';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {RFValue} from 'react-native-responsive-fontsize';
const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

export const isIos = Platform.OS === 'ios';

export const pxScale = {
  guidelineBaseWidth: 414,
  guidelineBaseHeight: 896,
  widthScale() {
    return SCREEN_WIDTH / this.guidelineBaseWidth;
  },
  heightScale() {
    return SCREEN_HEIGHT / this.guidelineBaseHeight;
  },

  wp(px: number) {
    const percentage = (px / this.guidelineBaseWidth) * 100;

    return wp(percentage);
  },

  hp(px: number) {
    const scale = isIphoneX() ? this.heightScale() : 1;

    const percentage = (px / scale / this.guidelineBaseHeight) * 100;

    return hp(percentage);
  },

  fontSize(px: number, baseHeight?: number) {
    if (isIphoneX()) {
      baseHeight = 812;
    } else {
      baseHeight = this.guidelineBaseHeight;
    }
    return RFValue(px, baseHeight);
  },
};

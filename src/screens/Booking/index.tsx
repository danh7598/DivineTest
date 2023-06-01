import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../../constant/colors';
import {pxScale} from '../../helpers';

const Booking = () => {
  return (
    <View style={styles.container}>
      <LinearGradient style={styles.linearContainer} colors={colors.gradientBg}>
        <Text
          style={{
            color: colors.white,
            textAlign: 'center',
            marginTop: pxScale.hp(100),
          }}>
          BOOKING
        </Text>
      </LinearGradient>
    </View>
  );
};

export default Booking;

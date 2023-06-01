import {View, Text, Image} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {Header} from '../../components/Header';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../../constant/colors';
import {pxScale} from '../../helpers';

const Home = () => {
  return (
    <View style={styles.container}>
      <LinearGradient style={styles.linearContainer} colors={colors.gradientBg}>
        <Text
          style={{
            color: colors.white,
            textAlign: 'center',
            marginTop: pxScale.hp(100),
          }}>
          HOME
        </Text>
      </LinearGradient>
    </View>
  );
};

export default Home;

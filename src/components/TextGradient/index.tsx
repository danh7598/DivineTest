import {Text, TextStyle, ViewStyle} from 'react-native';
import React from 'react';
import {styles} from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../../constant/colors';
import MaskedView from '@react-native-masked-view/masked-view';

type Props = {
  colorsGradient?: string[];
  styleContainer?: ViewStyle;
  children?: String;
  style?: TextStyle;
};

const TextGradient = (props: Props) => {
  return (
    <MaskedView maskElement={<Text {...props} />}>
      <LinearGradient colors={props.colorsGradient || colors.gradientButton}>
        <Text {...props} style={[props.style, {opacity: 0}]} />
      </LinearGradient>
    </MaskedView>
  );
};

export default TextGradient;

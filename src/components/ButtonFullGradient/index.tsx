import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {styles} from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../../constant/colors';

type Props = {
  title: string;
  colorsGradient?: string[];
  styleContainer?: ViewStyle;
  onPress?: () => void;
  loading?: boolean;
};

const ButtonFullGradient = ({
  title,
  styleContainer,
  colorsGradient,
  onPress,
  loading,
}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, styleContainer]}>
      <LinearGradient
        style={styles.linearStyle}
        colors={colorsGradient || colors.gradientButton}>
        {loading ? (
          <ActivityIndicator />
        ) : (
          <Text style={styles.textButton}>{title}</Text>
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default ButtonFullGradient;

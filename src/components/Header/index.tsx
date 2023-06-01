import * as React from 'react';
import {
  Image,
  StatusBar,
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styles from './styles';
import {AppImages} from '../../assets/images';

export interface HeaderProps {
  /**
   * An optional style override useful for padding & margin.
   */
  leftComponent?: JSX.Element;
  title?: string;
  rightComponent?: JSX.Element;
  leftImage?: string;
  rightImage?: string;
  titleStyle?: TextStyle;
  style?: StyleProp<ViewStyle>;
  onPressLeft?: () => void;
  onPressRight?: () => void;
  styleIconLeft?: StyleProp<ViewStyle>;
  statusBarStyle?: 'light-content' | 'dark-content' | 'default';
  showIconLeft?: boolean;
  headerImage?: string;
  titleComponent: JSX.Element;
}

/**
 * Header that appears on many screens. Will hold navigation buttons and screen title.
 */
export function Header(props: HeaderProps) {
  const {
    style,
    titleStyle,
    onPressLeft,
    onPressRight,
    styleIconLeft,
    showIconLeft = true,
    statusBarStyle,
    leftComponent,
    title,
    rightComponent,
    leftImage,
    titleComponent,
    headerImage,
  } = props;

  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container(insets.top), style]}>
      <StatusBar
        barStyle={statusBarStyle || 'light-content'}
        translucent
        backgroundColor={'transparent'}
      />
      <View style={styles.groupTitle}>
        {leftComponent ||
          (showIconLeft ? (
            <TouchableOpacity onPress={onPressLeft}>
              <Image
                resizeMode="contain"
                style={[styles.iconLeft, styleIconLeft]}
                source={leftImage || AppImages.back}
              />
            </TouchableOpacity>
          ) : (
            <View />
          ))}
        {titleComponent
          ? titleComponent
          : title && (
              <Text style={[styles.textTitle, titleStyle]}>{title}</Text>
            )}
      </View>
      {rightComponent || <View />}
    </View>
  );
}

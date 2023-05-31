import React from 'react';
import {StyleSheet} from 'react-native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import {
  BaseToast,
  BaseToastProps,
  ErrorToast,
} from 'react-native-toast-message';
import {pxScale} from '../../helpers';

const toastConfig = {
  // /*
  //   Overwrite 'success' type,
  //   by modifying the existing `BaseToast` component
  // */
  // success: (props: BaseToastProps) => (
  //   <BaseToast {...props} style={styles.toastMargin} />
  // ),
  // /*
  //   Overwrite 'error' type,
  //   by modifying the existing `ErrorToast` component
  // */
  // error: (props: any) => <ErrorToast {...props} style={[styles.toastMargin]} />,
};

const styles = StyleSheet.create({
  toastMargin: {
    marginTop: getStatusBarHeight() + pxScale.hp(32),
  },
});

export {toastConfig};

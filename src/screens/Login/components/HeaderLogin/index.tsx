import {View, Text, Image, ViewStyle} from 'react-native';
import React, {forwardRef, useImperativeHandle, useState} from 'react';
import {styles} from './styles';
import {useAppSelector} from '../../../../redux/store';
import {AppImages} from '../../../../assets/images';
import LanguagePicker from '../LanguagePicker';

type Props = {
  title: string;
  styleContainer?: ViewStyle;
};

const HeaderLogin = forwardRef(({title, styleContainer}: Props, ref) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const language = useAppSelector(store => store.app.language);
  const [isOpenPicker, setIsOpenPicker] = useState<boolean>(false);
  useImperativeHandle(
    ref,
    () => {
      return {
        setIsOpenPicker: (open: boolean) => {
          setIsOpenPicker(open);
        },
      };
    },
    [],
  );
  return (
    <View style={[styles.container, styleContainer]}>
      <Text style={styles.textTitle}>{title}</Text>
      <View style={styles.groupPicker}>
        <LanguagePicker
          isOpen={isOpenPicker}
          onTogglePicker={() => setIsOpenPicker(!isOpenPicker)}
        />
        <Image source={AppImages.usFlag} style={styles.imageFlag} />
      </View>
    </View>
  );
});

export default HeaderLogin;

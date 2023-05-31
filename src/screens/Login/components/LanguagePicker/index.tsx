import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {useAppDispatch, useAppSelector} from '../../../../redux/store';
import {appActions} from '../../../../redux/app/appSlice';
import {t} from '../../../../i18n/i18n';
import {AppImages} from '../../../../assets/images';

type Props = {
  onTogglePicker: () => void;
  isOpen: boolean;
};

const LanguagePicker = ({isOpen, onTogglePicker}: Props) => {
  const language = useAppSelector(store => store.app.language);
  const dispatch = useAppDispatch();

  const onSelectLanguage = (languageSelect: string) => {
    dispatch(appActions.changeLanguage(languageSelect));
    onTogglePicker();
  };
  return (
    <View>
      <TouchableOpacity onPress={onTogglePicker} style={styles.container}>
        <Text style={styles.textLanguage}>
          {language === 'en' ? t('English') : t('Vietnamese')}
        </Text>
        <Image source={AppImages.iconDownWhite} style={styles.imgDown} />
      </TouchableOpacity>
      {isOpen && (
        <View style={styles.modalLanguage}>
          <TouchableOpacity
            onPress={() => onSelectLanguage('en')}
            style={[styles.itemLanguage, {borderBottomWidth: 1}]}>
            <Text style={styles.textItemLanguage}>{t('English')}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onSelectLanguage('vi')}
            style={styles.itemLanguage}>
            <Text style={styles.textItemLanguage}>{t('Vietnamese')}</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default LanguagePicker;

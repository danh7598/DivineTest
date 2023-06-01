import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './styles';
import {colors} from '../../constant/colors';
import {Header} from '../../components/Header';
import {AppImages} from '../../assets/images';
import ButtonFullGradient from '../../components/ButtonFullGradient';
import LanguagePicker from '../Login/components/LanguagePicker';
import {store} from '../../redux/store';
import {authActions} from '../../redux/auth/authSlice';

type Props = {};

const data = [
  {
    title: 'Edit Profile',
    image: AppImages.edit,
    linear: true,
  },
  {
    title: 'Contact Social Media',
    image: AppImages.edit,
  },
  {
    title: 'Mot de passe',
    image: AppImages.edit,
  },
  {
    title: 'Log out',
    image: AppImages.logout,
    onPress: () => {
      store.dispatch(authActions.logout());
    },
  },
];

const Profile = (props: Props) => {
  const [isOpenPicker, setIsOpenPicker] = useState<boolean>(false);
  return (
    <View style={styles.container}>
      <LinearGradient style={styles.linearContainer} colors={colors.gradientBg}>
        <Header
          title="Profile"
          rightComponent={
            <LanguagePicker
              isOpen={isOpenPicker}
              onTogglePicker={() => setIsOpenPicker(!isOpenPicker)}
            />
          }
        />
        <View style={styles.avatarView}>
          <TouchableOpacity>
            <Image source={AppImages.avatar} style={styles.avatar} />
            <LinearGradient
              style={styles.editLinearView}
              colors={colors.gradientButton}>
              <Image source={AppImages.pencil} style={styles.editIcon} />
            </LinearGradient>
          </TouchableOpacity>
          <Text style={styles.textName}>Linda Ambar</Text>
        </View>
        <View style={styles.buttonContainer}>
          {data.map((item, index) => (
            <ButtonFullGradient
              onPress={item.onPress && item.onPress}
              key={index}
              styleContainer={styles.button}
              linearStyle={styles.linearButton}
              colorsGradient={
                !item?.linear
                  ? [colors['#F0F2F4-94'], colors['#F0F2F4-94']]
                  : undefined
              }>
              <View style={styles.childrenButtonView}>
                <Text style={styles.textTitleButton}>{item.title}</Text>
                <Image source={item.image} style={styles.iconButton} />
              </View>
            </ButtonFullGradient>
          ))}
        </View>
      </LinearGradient>
    </View>
  );
};

export default Profile;

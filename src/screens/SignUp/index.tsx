import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import React, {useRef} from 'react';
import {styles} from './styles';
import {t} from '../../i18n/i18n';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../../constant/colors';
import {Formik} from 'formik';
import InputAuth from '../../components/InputAuth';
import {pxScale} from '../../helpers';
import {ScrollView} from 'react-native-gesture-handler';
import {useAppDispatch, useAppSelector} from '../../redux/store';
import {authActions} from '../../redux/auth/authSlice';
import ButtonFullGradient from '../../components/ButtonFullGradient';
import TextGradient from '../../components/TextGradient';
import * as Yup from 'yup';
import HeaderLogin from '../Login/components/HeaderLogin';
import {useNavigation} from '@react-navigation/native';
import {screenName} from '../../constant/screenName';

const SignUp = () => {
  const language = useAppSelector(store => store.app.language);
  const loadingLogin = useAppSelector(store => store.auth.loadingLogin);
  console.log('Login ~ loadingLogin:', loadingLogin);
  const navigation = useNavigation();
  const headerLoginRef = useRef<any>();
  const dispatch = useAppDispatch();

  const initialValues = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    mobileNumber: '',
    repeatPassword: '',
  };

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email(t('Invalid_email')).required(t('Email_required')),
    password: Yup.string()
      .min(8, t('Password_must_be_at_least_8_character'))
      .required(t('Password_required')),
    firstName: Yup.string()
      .min(3, t('First_name_must_be_at_least_3_characters'))
      .required(t('First_name_is_required')),
    lastName: Yup.string()
      .min(3, t('Last_name_must_be_at_least_3_characters'))
      .required(t('Last_name_is_required')),
    mobileNumber: Yup.string().required(t('Mobile_number_is_required')),
    repeatPassword: Yup.string().required(t('Repeat_Password_is_required')),
  });

  const onLogin = (values: {email: string; password: string}) => {
    dispatch(authActions.login({values}));
  };

  const navigateLogin = () => {
    navigation.navigate(screenName.LOGIN);
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.linearContainer}
        colors={colors.gradientBg}
      />
      <ScrollView
        style={styles.scrollStyle}
        contentContainerStyle={styles.scrollContainer}>
        <Pressable
          style={styles.pressableContainer}
          onPress={() => {
            headerLoginRef.current?.setIsOpenPicker(false);
            Keyboard.dismiss();
          }}>
          <Formik
            initialValues={initialValues}
            validationSchema={LoginSchema}
            onSubmit={onLogin}>
            {({handleChange, handleBlur, handleSubmit, values, errors}) => (
              <KeyboardAvoidingView style={styles.viewForm}>
                <InputAuth
                  value={values.firstName}
                  onChange={handleChange('firstName')}
                  title={t('First_name')}
                  textInputProps={{
                    placeholder: t('Please_enter_first_name'),
                  }}
                  error={errors.firstName}
                />
                <InputAuth
                  styleContainer={{marginTop: pxScale.hp(30)}}
                  value={values.lastName}
                  onChange={handleChange('lastName')}
                  title={t('Last_name')}
                  textInputProps={{
                    placeholder: t('Please_enter_last_name'),
                  }}
                  error={errors.lastName}
                />
                <InputAuth
                  styleContainer={{marginTop: pxScale.hp(30)}}
                  value={values.mobileNumber}
                  onChange={handleChange('mobileNumber')}
                  title={t('Mobile_number')}
                  textInputProps={{
                    placeholder: t('Please_enter_mobile_phone'),
                  }}
                  error={errors.mobileNumber}
                />
                <InputAuth
                  styleContainer={{marginTop: pxScale.hp(30)}}
                  value={values.email}
                  onChange={handleChange('email')}
                  title={t('Email')}
                  textInputProps={{
                    placeholder: t('Enter_your_email'),
                  }}
                  error={errors.email}
                />
                <InputAuth
                  styleContainer={{marginTop: pxScale.hp(30)}}
                  value={values.password}
                  onChange={handleChange('password')}
                  title={t('Password')}
                  type="password"
                  textInputProps={{
                    placeholder: t('Enter_your_password'),
                  }}
                  error={errors.password}
                />
                <InputAuth
                  styleContainer={{marginTop: pxScale.hp(30)}}
                  value={values.repeatPassword}
                  onChange={handleChange('repeatPassword')}
                  title={t('Repeat_Password')}
                  type="password"
                  textInputProps={{
                    placeholder: t('Enter_your_password'),
                  }}
                  error={errors.repeatPassword}
                />

                <ButtonFullGradient
                  styleContainer={{marginTop: pxScale.hp(40)}}
                  loading={loadingLogin}
                  onPress={handleSubmit}
                  title={t('Sign_up')}
                />
                <HeaderLogin
                  styleContainer={styles.headerContainer}
                  ref={headerLoginRef}
                  title={t('Sign_up')}
                />
              </KeyboardAvoidingView>
            )}
          </Formik>
          <View style={styles.groupDontHaveAccount}>
            <Text style={styles.textDontHaveAccount}>
              {t('Have_an_account')}?{' '}
            </Text>
            <TouchableOpacity onPress={navigateLogin}>
              <TextGradient style={styles.textDontHaveAccountGradient}>
                {t('Sign_in')}
              </TextGradient>
            </TouchableOpacity>
          </View>
        </Pressable>
      </ScrollView>
    </View>
  );
};

export default SignUp;

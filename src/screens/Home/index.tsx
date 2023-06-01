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
import {useNavigation} from '@react-navigation/native';
import {screenName} from '../../constant/screenName';

const Home = () => {
  const language = useAppSelector(store => store.app.language);
  const loadingLogin = useAppSelector(store => store.auth.loadingLogin);
  const navigation = useNavigation();
  const headerLoginRef = useRef<any>();
  const dispatch = useAppDispatch();

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email(t('Invalid_email')).required(t('Email_required')),
    password: Yup.string().required(t('Password_required')),
  });

  const onLogin = (values: {email: string; password: string}) => {
    console.log('values', values);
    dispatch(authActions.login({values}));
  };

  const navigateSignUp = () => {
    navigation.navigate(screenName.SIGN_UP);
  };

  const navigateForgotPassword = () => {
    navigation.navigate(screenName.FORGOT_PASSWORD);
  };

  return (
    <View style={styles.container}>
      <LinearGradient style={styles.linearContainer} colors={colors.gradientBg}>
        <ScrollView
          style={styles.scrollStyle}
          contentContainerStyle={styles.container}>
          <Pressable
            style={styles.pressableContainer}
            onPress={() => {
              headerLoginRef.current?.setIsOpenPicker(false);
              Keyboard.dismiss();
            }}>
            <View style={{flex: 1}} />
            <Formik
              initialValues={{email: '', password: ''}}
              validationSchema={LoginSchema}
              onSubmit={onLogin}>
              {({handleChange, touched, handleSubmit, values, errors}) => (
                <KeyboardAvoidingView style={styles.viewForm}>
                  <InputAuth
                    value={values.email}
                    onChange={handleChange('email')}
                    title={t('Email')}
                    textInputProps={{
                      placeholder: t('Enter_your_email'),
                    }}
                    error={touched.email && errors.email}
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
                    error={touched.password && errors.password}
                  />
                  <TouchableOpacity
                    onPress={navigateForgotPassword}
                    style={{marginTop: pxScale.hp(10)}}>
                    <TextGradient style={styles.textForgot}>
                      {`${t('Forgot_password')}?`}
                    </TextGradient>
                  </TouchableOpacity>

                  <ButtonFullGradient
                    styleContainer={{marginTop: pxScale.hp(40)}}
                    loading={loadingLogin}
                    onPress={handleSubmit}
                    title={t('Sign_in')}
                  />
                </KeyboardAvoidingView>
              )}
            </Formik>
            <View style={{flex: 1}} />
            <View style={styles.groupDontHaveAccount}>
              <Text style={styles.textDontHaveAccount}>
                {t('Dont_have_any_account')}?{' '}
              </Text>
              <TouchableOpacity onPress={navigateSignUp} style={{}}>
                <TextGradient style={styles.textDontHaveAccountGradient}>
                  {t('Sign_up')}
                </TextGradient>
              </TouchableOpacity>
            </View>
          </Pressable>
        </ScrollView>
      </LinearGradient>
    </View>
  );
};

export default Home;

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
import ButtonFullGradient from '../../components/ButtonFullGradient';
import TextGradient from '../../components/TextGradient';
import * as Yup from 'yup';
import {useNavigation} from '@react-navigation/native';
import {screenName} from '../../constant/screenName';

const ForgotPassword = () => {
  const navigation = useNavigation();
  const headerLoginRef = useRef<any>();

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email(t('Invalid_email')).required(t('Email_required')),
  });

  const onSendEmail = (values: {email: string}) => {};

  const navigateSignUp = () => {
    navigation.navigate(screenName.SIGN_UP);
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
              onSubmit={onSendEmail}>
              {({handleChange, handleSubmit, values, errors}) => (
                <KeyboardAvoidingView style={styles.viewForm}>
                  <Text style={styles.textTitleForgotPassword}>
                    {t('Forgot_password')}
                  </Text>
                  <Text style={styles.textNoteForgot}>
                    {t('Please_enter_the_email_address_you_d_like')}
                  </Text>
                  <InputAuth
                    value={values.email}
                    onChange={handleChange('email')}
                    textInputProps={{
                      placeholder: t('Enter_your_email'),
                    }}
                    error={errors.email}
                  />

                  <ButtonFullGradient
                    styleContainer={{marginTop: pxScale.hp(40)}}
                    onPress={handleSubmit}
                    title={t('Send_email')}
                  />
                </KeyboardAvoidingView>
              )}
            </Formik>
            <View style={{flex: 1}} />
            <View style={styles.groupDontHaveAccount}>
              <Text style={styles.textDontHaveAccount}>
                {t('Dont_have_any_account')}?{' '}
              </Text>
              <TouchableOpacity onPress={navigateSignUp}>
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

export default ForgotPassword;

import {takeLatest, put, delay} from 'redux-saga/effects';
import {AnyAction} from 'redux';
import {authActions} from './authSlice';
import {AxiosResponse} from 'axios';
import Toast from 'react-native-toast-message';
import {API_ENDPOINT} from '../../constant/config';
import API from '../../services/api';
import {navigateAndReset} from '../../navigation/navigationHelper';
import {screenName} from '../../constant/screenName';

interface ILoginResponse {}
// Define the generator function that will handle the action
export function* loginSaga(action: AnyAction) {
  const {values} = action.payload;
  console.log('function*loginSaga ~ values:', values);
  try {
    if (
      values.email?.toLowerCase() === 'admin@gmail.com' &&
      values.password === '123456'
    ) {
      yield delay(1000);
      yield put(
        authActions.loginSuccess({
          token: 'fake token',
          user: {
            email: 'admin@gmail.com',
            firstName: 'admin',
            lastName: 'fake',
            mobileNumber: '+0123345567',
            sexe: 1,
            type: 1,
          },
        }),
      );
      navigateAndReset([screenName.ROOT_TAB]);
    } else {
      const response: AxiosResponse<ILoginResponse> = yield API.post(
        API_ENDPOINT.login,
        values,
      );
      console.log('function*loginSaga ~ response:', response);
      yield put(authActions.loginSuccess({}));
    }
  } catch (error) {
    console.log('function*loginSaga ~ error:', error);
    Toast.show({
      type: 'error',
      text1: 'Error when login',
      text2: 'Something went wrong',
    });
    yield put(authActions.loginFailure({}));
  }
}

export function* signupSaga(action: AnyAction) {
  const {values} = action.payload;
  console.log('function*signupSaga ~ values:', values);
  try {
    const response: AxiosResponse<ILoginResponse> = yield API.post(
      API_ENDPOINT.signUp,
      {
        ...values,
        type: 1,
        sexe: 1,
      },
    );
    console.log('function*signupSaga ~ response:', response);
  } catch (error) {
    console.log('function*signupSaga ~ error:', error);
    Toast.show({
      type: 'error',
      text1: 'Error when sign up',
      text2: 'Something went wrong',
    });
    yield put(authActions.signupFailure({}));
  }
}

// Define the watcher generator function that will watch for incoming actions
export function* authSaga() {
  yield takeLatest(authActions.login, loginSaga);
  yield takeLatest(authActions.signup, signupSaga);
}

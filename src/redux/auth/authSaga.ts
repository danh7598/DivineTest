import {takeLatest, put} from 'redux-saga/effects';
import {AnyAction} from 'redux';
import {authActions} from './authSlice';
import {AxiosResponse} from 'axios';
import Toast from 'react-native-toast-message';
import {API_ENDPOINT} from '../../constant/config';
import {t} from '../../i18n/i18n';
import API from '../../services/api';

interface ILoginResponse {}
// Define the generator function that will handle the action
export function* loginSaga(action: AnyAction) {
  const {values} = action.payload;
  console.log('function*loginSaga ~ values:', values);
  try {
    const response: AxiosResponse<ILoginResponse> = yield API.post(
      API_ENDPOINT.login,
      values,
    );
    console.log('function*loginSaga ~ response:', response);
  } catch (error) {
    console.log('function*loginSaga ~ error:', error.message);
    Toast.show({
      type: 'error',
      text1: 'Error when login',
      text2: 'Something went wrong',
    });
    yield put(
      authActions.loginFailure({
        error: error.message?.includes('422')
          ? t('Wrong_account_or_password')
          : '',
      }),
    );
  }
}

// Define the watcher generator function that will watch for incoming actions
export function* authSaga() {
  yield takeLatest(authActions.login, loginSaga);
}

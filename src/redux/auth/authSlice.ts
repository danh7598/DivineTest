import {createSlice} from '@reduxjs/toolkit';
import {navigate} from '../../navigation/navigationHelper';
import {screenName} from '../../constant/screenName';

const initialState: {
  user?: {
    name: string;
    email: string;
  };
  token?: string;
  loadingLogin: boolean;
  errorLogin?: string;
  loadingSignUp: boolean;
} = {
  loadingLogin: false,
  loadingSignUp: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    login: (state, action) => {
      state.loadingLogin = true;
    },
    loginSuccess: (state, action) => {
      const {token, user} = action.payload || {};
      state.token = token;
      state.user = user;
      state.loadingLogin = false;
    },
    loginFailure: (state, action) => {
      state.loadingLogin = false;
    },
    signup: (state, action) => {
      state.loadingSignUp = true;
    },
    signupSuccess: (state, action) => {
      state.loadingSignUp = false;
    },
    signupFailure: (state, action) => {
      state.loadingSignUp = false;
    },
    logout: (state) => {
      state.token = undefined;
      state.user = undefined;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;

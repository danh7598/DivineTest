import {createSlice} from '@reduxjs/toolkit';

const initialState: {
  user?: {
    name: string;
    email: string;
  };
  token?: string;
  loadingLogin: boolean;
  errorLogin?: string;
} = {
  loadingLogin: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    login: (state, action) => {
      state.loadingLogin = true;
    },
    loginSuccess: (state, action) => {
      state.loadingLogin = false;
    },
    loginFailure: (state, action) => {
      state.loadingLogin = false;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;

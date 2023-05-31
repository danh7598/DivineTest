import {createSlice} from '@reduxjs/toolkit';

const initialState: {
  user?: {
    name: string;
    email: string;
  };
  token?: string;
} = {};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {},
});

export const authActions = authSlice.actions;
export default authSlice.reducer;

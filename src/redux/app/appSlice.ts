import {createSlice} from '@reduxjs/toolkit';
import I18n from 'react-native-i18n';
const initialState: {
  language: string;
} = {
  language: 'en',
};

const appSlice = createSlice({
  name: 'app',
  initialState: initialState,
  reducers: {
    changeLanguage: (state, action) => {
      state.language = action.payload;
      I18n.locale = action.payload;
    },
  },
});

export const appActions = appSlice.actions;
export default appSlice.reducer;

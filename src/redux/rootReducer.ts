import {AnyAction, combineReducers} from '@reduxjs/toolkit';
import authSlice from './auth/authSlice';
import appSlice from './app/appSlice';

const combinedReducer = combineReducers({
  auth: authSlice,
  app: appSlice,
});

export const rootReducer = (state: any, action: AnyAction) => {
  return combinedReducer(state, action);
};

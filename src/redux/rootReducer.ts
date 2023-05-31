import {AnyAction, combineReducers} from '@reduxjs/toolkit';
import authSlice from './auth/authSlice';

const combinedReducer = combineReducers({
  auth: authSlice,
});

export const rootReducer = (state: any, action: AnyAction) => {
  return combinedReducer(state, action);
};

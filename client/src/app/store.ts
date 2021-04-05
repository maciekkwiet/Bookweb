import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../Actions/userSlice';

export const store = configureStore({
  reducer: {
    user: userReducer.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

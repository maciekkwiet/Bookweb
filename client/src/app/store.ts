import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../slicers/userSlice';
import inputSlice from '../slicers/inputSlice';

export const store = configureStore({
  reducer: {
    user: userReducer.reducer,
    searchInput: inputSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

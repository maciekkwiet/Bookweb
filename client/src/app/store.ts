import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import userReducer from '../Features/User/UserSlice';

const middleware = [...getDefaultMiddleware()];

export default configureStore({
  reducer: {
    user: userReducer,
  },
  middleware,
});

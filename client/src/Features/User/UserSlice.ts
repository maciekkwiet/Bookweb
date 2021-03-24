import { createSlice } from '@reduxjs/toolkit';

export interface User {
  id: number;
  email: string;
  password: string;
  name: string;
  surname: string;
  avatar: string;
}

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state, action) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state) => state.user;

export default userSlice.reducer;

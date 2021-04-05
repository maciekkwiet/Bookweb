import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

export type User = {
  id: number;
  email: string;
  password: string;
  name: string;
  surname: string;
  avatar: string;
};

type UserState = {
  user: User | null;
  status: string | null;
};

type SignupUserType = { name: string; email: string; password: string };

export const signupUser = createAsyncThunk(
  'user/signupUser',
  async ({ name, email, password }: SignupUserType, thunkAPI) => {
    try {
      const { data, status } = await axios.post('http://localhost:8080/api/users/register', {
        email,
        name,
        password,
      });
      if (status === 200) {
        localStorage.setItem('token', data.token);
        return data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response.data);
    }
  },
);

const initialState = { user: null, status: null } as UserState;

const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [signupUser?.pending.toString()]: (state) => {
      state.status = 'loading';
    },
    [signupUser?.fulfilled.toString()]: (state, action: PayloadAction<User>) => {
      const {
        payload: { id, email, password, name, surname, avatar },
      } = action;
      state.user = { id, email, password, name, surname, avatar };
      state.status = 'success';
    },
    [signupUser?.rejected.toString()]: (state) => {
      state.user = null;
      state.status = 'failed';
    },
  },
});

export const user = (state: { user }) => state.user;
export default userReducer;

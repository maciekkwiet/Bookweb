import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

export type UserType = {
  id: number;
  email: string;
  password: string;
  name: string;
  surname: string;
  avatar: string;
};

type UserState = {
  user?: UserType;
  status?: string;
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

const initialState = {} as UserState;

const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [signupUser?.pending.toString()]: (state) => {
      state.status = 'loading';
    },
    [signupUser?.fulfilled.toString()]: (state, action: PayloadAction<UserType>) => {
      const {
        payload: { id, email, password, name, surname, avatar },
      } = action;
      state.user = { id, email, password, name, surname, avatar };
      state.status = 'success';
    },
    [signupUser?.rejected.toString()]: (state) => {
      state.status = 'failed';
    },
  },
});

export const user = (state: { user }) => state.user;
export default userReducer;

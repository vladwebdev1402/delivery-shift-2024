import { User } from '@/types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { TokenService } from '@/shared/api';

interface AuthSliceState {
  isAuth: boolean;
  user: User | null;
}

const initialState: AuthSliceState = {
  isAuth: TokenService.checkToken(),
  user: null,
};

const AuthSlice = createSlice({
  name: 'AuthSlice',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.isAuth = true;
      TokenService.setToken(action.payload);
    },
    logout: (state) => {
      state.isAuth = false;
      state.user = null;
      TokenService.removeToken();
    },
    updateUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
  },
});

export const AuthReducer = AuthSlice.reducer;
export const { logout, setToken, setUser, updateUser } = AuthSlice.actions;

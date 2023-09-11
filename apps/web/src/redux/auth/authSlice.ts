import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

interface IAuthState {
  email: string | null;
  loggedIn: boolean;
}

const initialState: IAuthState = {
  email: null,
  loggedIn: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoggedIn: (state, action: PayloadAction<IAuthState>) => {
      state.email = action.payload.email;
      state.loggedIn = action.payload.loggedIn;
    },
    setLoggedOut: (state) => {
      state.email = null;
      state.loggedIn = false;
    }
  }
});

export const selectAuth = (state: RootState) => state.auth;
export default authSlice.reducer;
export const { setLoggedIn, setLoggedOut } = authSlice.actions;
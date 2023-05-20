import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Auth, AuthState} from '../../../types/Auth';

const initialState: AuthState = {
  auth: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<Auth>) => {
      state.auth = action.payload;
    },
  },
});

export const {setAuth} = authSlice.actions;
export default authSlice.reducer;

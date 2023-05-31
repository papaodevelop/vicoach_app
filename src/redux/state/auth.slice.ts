import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Auth, AuthState} from '../../../types/Auth';

const initialState: AuthState = {
  auth: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.auth = action.payload;
    },
  },
});

export const {setAuth} = authSlice.actions;
export default authSlice.reducer;

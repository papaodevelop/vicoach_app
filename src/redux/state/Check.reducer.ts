import {createSlice} from '@reduxjs/toolkit';
const getcheck = createSlice({
  name: 'check',
  initialState: {
    check: false,
  },
  reducers: {
    Check: (state, action) => {
      state.check = action.payload;
    },
  },
});

export const {Check} = getcheck.actions;
export default getcheck.reducer;
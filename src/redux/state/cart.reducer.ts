import {createSlice} from '@reduxjs/toolkit';
const initialState = {
  cart: [],
};
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart: (state: any, action) => {
      const newItem = action.payload;
      const existingItem = state.cart.find(
        (item: any) => item?.id === newItem.id,
      );

      if (!existingItem) {
        state.cart.push(newItem);
      }
    },
    removeCart: (state: any, action) => {
      const itemId = action.payload;
      state.cart = state.cart.filter((item: any) => item.id !== itemId);
    },
    removeAll: (state: any, action) => {
      state.cart = action.payload;
    },
  },
});
export const {addCart, removeCart, removeAll} = cartSlice.actions;
export default cartSlice.reducer;

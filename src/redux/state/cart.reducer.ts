import {createSlice} from '@reduxjs/toolkit';
import {CourseCategoryType} from '../../../types/CourseCategoryType';
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
  },
});
export const {addCart, removeCart} = cartSlice.actions;
export default cartSlice.reducer;

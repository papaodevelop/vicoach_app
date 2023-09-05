import {createSlice} from '@reduxjs/toolkit';
const getQuizz = createSlice({
  name: 'favorite',
  initialState: {
    favori: [],
  },
  reducers: {
    addFavorite: (state: any, action) => {
      const newItem = action.payload;
      const existingItem = state.favori.find(
        (item: any) => item?.id === newItem.id,
      );

      if (!existingItem) {
        state.favori.push(newItem);
      }
    },
    removeFavorite: (state: any, action) => {
      const itemId = action.payload;
      state.favori = state.favori.filter((item: any) => item.id !== itemId);
    },
  },
});
export const {addFavorite, removeFavorite} = getQuizz.actions;
export default getQuizz.reducer;

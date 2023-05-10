import {createSlice} from '@reduxjs/toolkit';
const getQuizz = createSlice({
  name: 'quizz',
  initialState: {
    answer: [],
  },
  reducers: {
    Quizz: (state: any, action) => {
      state.answer.push(action.payload);
    },
    Reselect: (state, action) => {
      state.answer.map((item: any) => {
        if (action.payload.id === item.id) {
          item.chose = action.payload.chose;
        }
      });
    },
    DeleteForm: (state, action) => {
      state.answer = action.payload;
    },
  },
});
export const {Quizz, Reselect, DeleteForm} = getQuizz.actions;
export default getQuizz.reducer;

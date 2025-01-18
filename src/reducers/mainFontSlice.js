import { createSlice } from '@reduxjs/toolkit';

export const mainFontSlice = createSlice({
  name: 'mainFont',
  initialState: {
    value: 'Georgia',
  },
  reducers: {
    selectMainFont: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { selectMainFont } = mainFontSlice.actions;

export default mainFontSlice.reducer;

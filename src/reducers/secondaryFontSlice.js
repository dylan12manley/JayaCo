import { createSlice } from '@reduxjs/toolkit';

export const secondaryFontSlice = createSlice({
  name: 'secondaryFont',
  initialState: {
    value: 'monospace',
  },
  reducers: {
    selectSecondaryFont: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { selectSecondaryFont } = secondaryFontSlice.actions;

export default secondaryFontSlice.reducer;

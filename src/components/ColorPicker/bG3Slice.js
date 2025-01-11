import { createSlice } from '@reduxjs/toolkit';

export const bG3Slice = createSlice({
  name: 'bG3Color',
  initialState: {
    value: '#ffffff',
  },
  reducers: {
    selectBG3Color: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { selectBG3Color } = bG3Slice.actions;

export default bG3Slice.reducer;

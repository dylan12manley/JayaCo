import { createSlice } from '@reduxjs/toolkit';

export const text1Slice = createSlice({
  name: 'textColor1',
  initialState: {
    value: '#000000',
  },
  reducers: {
    selectTextColor1: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { selectTextColor1 } = text1Slice.actions;

export default text1Slice.reducer;

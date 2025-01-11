import { createSlice } from '@reduxjs/toolkit';

export const text2Slice = createSlice({
  name: 'textColor2',
  initialState: {
    value: '#000000',
  },
  reducers: {
    selectTextColor2: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { selectTextColor2 } = text2Slice.actions;

export default text2Slice.reducer;

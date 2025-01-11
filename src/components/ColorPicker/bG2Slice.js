import { createSlice } from '@reduxjs/toolkit';

export const bG2Slice = createSlice({
  name: 'bG2Color',
  initialState: {
    value: '#ffffff',
  },
  reducers: {
    selectBG2Color: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { selectBG2Color } = bG2Slice.actions;

export default bG2Slice.reducer;

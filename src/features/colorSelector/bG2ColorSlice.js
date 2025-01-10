import { createSlice } from '@reduxjs/toolkit';

export const bG2ColorSlice = createSlice({
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

export const { selectBG2Color } = bG2ColorSlice.actions;

export default bG2ColorSlice.reducer;

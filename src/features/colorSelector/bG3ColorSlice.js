import { createSlice } from '@reduxjs/toolkit';

export const bG3ColorSlice = createSlice({
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

export const { selectBG3Color } = bG3ColorSlice.actions;

export default bG3ColorSlice.reducer;

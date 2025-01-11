import { createSlice } from '@reduxjs/toolkit';

export const bG1Slice = createSlice({
  name: 'bG1Color',
  initialState: {
    value: '#ffffff',
  },
  reducers: {
    selectBG1Color: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { selectBG1Color } = bG1Slice.actions;

export default bG1Slice.reducer;

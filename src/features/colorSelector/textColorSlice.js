import { createSlice } from '@reduxjs/toolkit';

export const textColorSlice = createSlice({
  name: 'textColor',
  initialState: {
    value: '#000000',
  },
  reducers: {
    selectTextColor: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { selectTextColor } = textColorSlice.actions;

export default textColorSlice.reducer;

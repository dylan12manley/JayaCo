import { createSlice } from '@reduxjs/toolkit';

export const headerTextColorSlice = createSlice({
  name: 'headerTextColor',
  initialState: {
    value: '#000000',
  },
  reducers: {
    selectHeaderTextColor: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { selectHeaderTextColor } = headerTextColorSlice.actions;

export default headerTextColorSlice.reducer;

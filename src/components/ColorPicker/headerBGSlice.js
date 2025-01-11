import { createSlice } from '@reduxjs/toolkit';

export const headerBGSlice = createSlice({
  name: 'headerBG',
  initialState: {
    value: '#ffffff',
  },
  reducers: {
    selectHeaderBG: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { selectHeaderBG } = headerBGSlice.actions;

export default headerBGSlice.reducer;

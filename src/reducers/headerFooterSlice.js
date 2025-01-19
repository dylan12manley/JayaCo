import { createSlice } from '@reduxjs/toolkit';

export const headerFooterSlice = createSlice({
  name: 'headerFooter',
  initialState: {
    value: [],
  },
  reducers: {
    setHeaderFooter: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setHeaderFooter } = headerFooterSlice.actions;

export default headerFooterSlice.reducer;

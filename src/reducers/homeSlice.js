import { createSlice } from '@reduxjs/toolkit';

export const homeSlice = createSlice({
  name: 'home',
  initialState: {
    value: [],
  },
  reducers: {
    setHome: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setHome } = homeSlice.actions;

export default homeSlice.reducer;

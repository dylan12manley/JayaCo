import { createSlice } from '@reduxjs/toolkit';

export const aboutSlice = createSlice({
  name: 'about',
  initialState: {
    value: [],
  },
  reducers: {
    setAbout: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setAbout } = aboutSlice.actions;

export default aboutSlice.reducer;

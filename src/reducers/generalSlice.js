import { createSlice } from '@reduxjs/toolkit';

export const generalSlice = createSlice({
  name: 'general',
  initialState: {
    value: [],
  },
  reducers: {
    setGeneral: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setGeneral } = generalSlice.actions;

export default generalSlice.reducer;

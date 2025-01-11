import { createSlice } from '@reduxjs/toolkit';

export const btn2BGSlice = createSlice({
  name: 'btn2BGColor',
  initialState: {
    value: '#ffffff',
  },
  reducers: {
    selectBtn2BGColor: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { selectBtn2BGColor } = btn2BGSlice.actions;

export default btn2BGSlice.reducer;

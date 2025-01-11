import { createSlice } from '@reduxjs/toolkit';

export const btn1BGSlice = createSlice({
  name: 'btn1BGColor',
  initialState: {
    value: '#ffffff',
  },
  reducers: {
    selectBtn1BGColor: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { selectBtn1BGColor } = btn1BGSlice.actions;

export default btn1BGSlice.reducer;

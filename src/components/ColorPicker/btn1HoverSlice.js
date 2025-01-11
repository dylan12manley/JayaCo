import { createSlice } from '@reduxjs/toolkit';

export const btn1HoverSlice = createSlice({
  name: 'btn1HoverColor',
  initialState: {
    value: '#ffffff',
  },
  reducers: {
    selectBtn1HoverColor: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { selectBtn1HoverColor } = btn1HoverSlice.actions;

export default btn1HoverSlice.reducer;

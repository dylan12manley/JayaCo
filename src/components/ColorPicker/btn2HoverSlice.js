import { createSlice } from '@reduxjs/toolkit';

export const btn2HoverSlice = createSlice({
  name: 'btn2HoverColor',
  initialState: {
    value: '#ffffff',
  },
  reducers: {
    selectBtn2HoverColor: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { selectBtn2HoverColor } = btn2HoverSlice.actions;

export default btn2HoverSlice.reducer;

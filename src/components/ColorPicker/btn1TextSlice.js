import { createSlice } from '@reduxjs/toolkit';

export const btn1TextSlice = createSlice({
  name: 'btn1TextColor',
  initialState: {
    value: '#000000',
  },
  reducers: {
    selectBtn1TextColor: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { selectBtn1TextColor } = btn1TextSlice.actions;

export default btn1TextSlice.reducer;

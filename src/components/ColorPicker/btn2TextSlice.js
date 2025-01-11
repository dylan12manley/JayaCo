import { createSlice } from '@reduxjs/toolkit';

export const btn2TextSlice = createSlice({
  name: 'btn2TextColor',
  initialState: {
    value: '#ffffff',
  },
  reducers: {
    selectBtn2TextColor: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { selectBtn2TextColor } = btn2TextSlice.actions;

export default btn2TextSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

export const bGColorSlice = createSlice({
  name: 'bGColor',
  initialState: {
    value: '#ffffff',
  },
  reducers: {
    selectBGColor: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { selectBGColor } = bGColorSlice.actions;

export default bGColorSlice.reducer;

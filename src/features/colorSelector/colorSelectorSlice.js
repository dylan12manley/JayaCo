import { createSlice } from '@reduxjs/toolkit';

export const colorSelectorSlice = createSlice({
  name: 'colorSelector',
  initialState: {
    value: '#ffffff',
  },
  reducers: {
    selectBackground: (state, action) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = colorSelectorSlice.actions;

export default colorSelectorSlice.reducer;

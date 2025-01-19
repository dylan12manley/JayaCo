import { createSlice } from '@reduxjs/toolkit';

export const companyInfoSlice = createSlice({
  name: 'companyInf',
  initialState: {
    value: [],
  },
  reducers: {
    setCompanyInfo: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setCompanyInfo } = companyInfoSlice.actions;

export default companyInfoSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

export const articlesSlice = createSlice({
  name: 'articles',
  initialState: {
    value: [],
  },
  reducers: {
    setArticles: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setArticles } = articlesSlice.actions;

export default articlesSlice.reducer;

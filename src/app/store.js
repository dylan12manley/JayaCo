import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import bGColorReducer from '../features/colorSelector/bGColorSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    bGColor: bGColorReducer,
  },
});

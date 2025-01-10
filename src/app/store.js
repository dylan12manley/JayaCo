import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import bGColorReducer from '../features/colorSelector/bGColorSlice';
import bG2ColorSlice from '../features/colorSelector/bG2ColorSlice';
import bG3ColorSlice from '../features/colorSelector/bg3ColorSlice';
import textColorSlice from '../features/colorSelector/textColorSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    bGColor: bGColorReducer,
    bG2Color: bG2ColorSlice,
    bG3Color: bG3ColorSlice,
    textColor: textColorSlice,
  },
});

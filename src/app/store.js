import { configureStore } from '@reduxjs/toolkit';
// header reducers
import headerBGReducer from '../components/ColorPicker/headerBGSlice';
import headerTextColorReducer from '../components/ColorPicker/headerTextColorSlice';
// main page reducers
import bG1Reducer from '../components/ColorPicker/bG1Slice';
import text1Reducer from '../components/ColorPicker/text1Slice';

import counterReducer from '../features/counter/counterSlice';
import bGColorReducer from '../features/colorSelector/bGColorSlice';
import bG2ColorSlice from '../features/colorSelector/bG2ColorSlice';
import bG3ColorSlice from '../features/colorSelector/bg3ColorSlice';
import textColorSlice from '../features/colorSelector/textColorSlice';

export default configureStore({
  reducer: {
    headerBG: headerBGReducer,
    headerTextColor: headerTextColorReducer,
    bG1: bG1Reducer,
    textColor1: text1Reducer,

    counter: counterReducer,
    bGColor: bGColorReducer,
    bG2Color: bG2ColorSlice,
    bG3Color: bG3ColorSlice,
    textColor: textColorSlice,
  },
});

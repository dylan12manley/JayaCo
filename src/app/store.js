import { configureStore } from '@reduxjs/toolkit';
// header reducers
import headerBGReducer from '../components/ColorPicker/headerBGSlice';
import headerTextColorReducer from '../components/ColorPicker/headerTextColorSlice';
// main page reducers
import bG1Reducer from '../components/ColorPicker/bG1Slice';
import bG2Reducer from '../components/ColorPicker/bG2Slice';
import bG3Reducer from '../components/ColorPicker/bG3Slice';
import text1Reducer from '../components/ColorPicker/text1Slice';
import text2Reducer from '../components/ColorPicker/text2Slice';
import btn1BGReducer from '../components/ColorPicker/btn1BGSlice';
import btn1HoverReducer from '../components/ColorPicker/btn1HoverSlice';
import btn1TextReducer from '../components/ColorPicker/btn1TextSlice';
import btn2BGReducer from '../components/ColorPicker/btn2BGSlice';
import btn2HoverReducer from '../components/ColorPicker/btn2HoverSlice';
import btn2TextReducer from '../components/ColorPicker/btn2TextSlice';
import mainFontReducer from '../reducers/mainFontSlice';
import secondaryFontReducer from '../reducers/secondaryFontSlice';

import headerFooterReducer from '../reducers/headerFooterSlice';
import aboutReducer from '../reducers/aboutSlice';
import articlesReducer from '../reducers/articlesSlice';
import categoriesReducer from '../reducers/categoriesSlice';
import companyInfoReducer from '../reducers/companyInfoSlice';
import generalReducer from '../reducers/generalSlice';
import homeReducer from '../reducers/homeSlice';
import reviewsReducer from '../reducers/reviewsSlice';

export default configureStore({
  reducer: {
    headerBG: headerBGReducer,
    headerTextColor: headerTextColorReducer,
    bG1: bG1Reducer,
    bG2: bG2Reducer,
    bG3: bG3Reducer,
    textColor1: text1Reducer,
    textColor2: text2Reducer,
    btn1BG: btn1BGReducer,
    btn1Hover: btn1HoverReducer,
    btn1TextColor: btn1TextReducer,
    btn2BG: btn2BGReducer,
    btn2Hover: btn2HoverReducer,
    btn2TextColor: btn2TextReducer,
    mainFont: mainFontReducer,
    secondaryFont: secondaryFontReducer,
    headerFooter: headerFooterReducer,
    about: aboutReducer,
    articles: articlesReducer,
    categories: categoriesReducer,
    companyInfo: companyInfoReducer,
    general: generalReducer,
    home: homeReducer,
    reviews: reviewsReducer,
  },
});

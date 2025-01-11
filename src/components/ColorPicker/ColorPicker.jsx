import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './ColorPicker.css';
import Sketch from '@uiw/react-color-sketch';
import { selectHeaderBG } from './headerBGSlice';
import { selectHeaderTextColor } from './headerTextColorSlice';
import { selectBG1Color } from './bG1Slice';
import { selectTextColor1 } from './text1Slice';
import { selectBG2Color } from './bG2Slice';
import { selectTextColor2 } from './text2Slice';
import { selectBG3Color } from './bG3Slice';
import { selectBtn1BGColor } from './btn1BGSlice';
import { selectBtn1HoverColor } from './btn1HoverSlice';
import { selectBtn1TextColor } from './btn1TextSlice';
import { selectBtn2BGColor } from './btn2BGSlice';
import { selectBtn2HoverColor } from './btn2HoverSlice';
import { selectBtn2TextColor } from './btn2TextSlice';

export default function ColorPicker(props) {
  const dispatch = useDispatch();
  //   Redux State Variables
  const headerBG = useSelector((state) => state.headerBG.value);
  const headerTextColor = useSelector((state) => state.headerTextColor.value);
  const bG1 = useSelector((state) => state.bG1.value);
  const textColor1 = useSelector((state) => state.textColor1.value);

  // toDo: use pageColorsArray when to handle default color picker values
  // maybe combine with colorKey array into object?
  const pageColorsArray = [];
  if (props.colorFor === 'header') pageColorsArray.push(headerBG, headerTextColor);
  if (props.colorFor === 'main-page')
    pageColorsArray.push(
      'main-background',
      'main-text',
      'main-button-background',
      'main-button-text',
      'main-button-hover',
      'background-2',
      'text-2',
      'button-2-background',
      'button-2-text',
      'button-2-hover',
      'background-3'
    );
  //   Hook State Variables
  const [hex, setHex] = useState(props.colorFor === 'header' ? headerBG : bG1);
  const [colorKey, setColorKey] = useState(props.colorFor === 'header' ? 'header-background' : 'main-background');

  const selectOptions = [];
  if (props.colorFor === 'header') {
    selectOptions.push('header-background', 'header-text');
  } else if (props.colorFor === 'main-page') {
    selectOptions.push(
      'main-background',
      'main-text',
      'main-button-background',
      'main-button-text',
      'main-button-hover',
      'background-2',
      'text-2',
      'button-2-background',
      'button-2-text',
      'button-2-hover',
      'background-3'
    );
  }

  function handleSelectColorKey(e) {
    setColorKey(e.target.value);
  }

  function handleClickSetColor() {
    if (colorKey === 'header-background') dispatch(selectHeaderBG(hex));
    if (colorKey === 'header-text') dispatch(selectHeaderTextColor(hex));
    if (colorKey === 'main-background') dispatch(selectBG1Color(hex));
    if (colorKey === 'background-2') dispatch(selectBG2Color(hex));
    if (colorKey === 'background-3') dispatch(selectBG3Color(hex));
    if (colorKey === 'main-text') dispatch(selectTextColor1(hex));
    if (colorKey === 'text-2') dispatch(selectTextColor2(hex));
    if (colorKey === 'main-button-background') dispatch(selectBtn1BGColor(hex));
    if (colorKey === 'main-button-text') dispatch(selectBtn1TextColor(hex));
    if (colorKey === 'main-button-hover') dispatch(selectBtn1HoverColor(hex));
    if (colorKey === 'button-2-background') dispatch(selectBtn2BGColor(hex));
    if (colorKey === 'button-2-text') dispatch(selectBtn2TextColor(hex));
    if (colorKey === 'button-2-hover') dispatch(selectBtn2HoverColor(hex));
  }

  useEffect(() => {
    setHex();
  }, [colorKey]);

  return (
    <>
      <h2>Color Picker</h2>
      <label htmlFor='color-key'>Choose a key:</label>
      <select
        name='color-key'
        id='color-key'
        onChange={handleSelectColorKey}
      >
        {selectOptions.map((elm, i) => (
          <option
            value={elm}
            key={i}
          >
            {elm}
          </option>
        ))}
      </select>
      <div className='color-picker-bottom'>
        <Sketch
          color={hex}
          disableAlpha='true'
          presetColors='false'
          onChange={(color) => {
            setHex(color.hex);
          }}
        />
        <div className='preivew-and-select-color'>
          <span style={{ background: hex }}>{hex ? hex : 'preview'}</span>
          <button onClick={handleClickSetColor}>Set {colorKey}</button>
        </div>
      </div>
    </>
  );
}

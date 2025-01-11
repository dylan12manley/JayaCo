import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Sketch from '@uiw/react-color-sketch';
import { selectHeaderBG } from './headerBGSlice';
import { selectHeaderTextColor } from './headerTextColorSlice';
import { selectBG1Color } from './bG1Slice';
import { selectTextColor1 } from './text1Slice';

export default function ColorPicker(props) {
  const dispatch = useDispatch();
  //   Redux State Variables
  const headerBG = useSelector((state) => state.headerBG.value);
  const headerTextColor = useSelector((state) => state.headerTextColor.value);
  const bG1 = useSelector((state) => state.bG1.value);
  const textColor1 = useSelector((state) => state.textColor1.value);
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
  const [hex, setHex] = useState(props.colorFor === 'header' ? headerBG : '#fff');
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

  console.log('color key', colorKey);

  function handleClickSetColor() {
    if (colorKey === 'header-background') dispatch(selectHeaderBG(hex));
    if (colorKey === 'header-text') dispatch(selectHeaderTextColor(hex));
    // if (colorKey === 'background') dispatch(selectBGColor(hex));
    // if (colorKey === 'background2') dispatch(selectBG2Color(hex));
    // if (colorKey === 'background3') dispatch(selectBG3Color(hex));
    // if (colorKey === 'text') dispatch(selectTextColor(hex));
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
      <div>
        <Sketch
          color={hex}
          disableAlpha='true'
          presetColors='false'
          onChange={(color) => {
            setHex(color.hex);
          }}
        />
        <div>
          <span style={{ background: hex }}>{hex}</span>
          <button onClick={handleClickSetColor}>Set {colorKey}</button>
        </div>
      </div>
    </>
  );
}

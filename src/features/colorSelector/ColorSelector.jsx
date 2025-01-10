import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { hsvaToHex, hexToHsva } from '@uiw/color-convert';
import Colorful from '@uiw/react-color-colorful';

import './colorSelector.css';
import { selectBGColor } from './bGColorSlice';
import { selectBG2Color } from './bG2ColorSlice';
import { selectBG3Color } from './bg3ColorSlice';
import { selectTextColor } from './textColorSlice';

export default function ColorSelector() {
  const bGColor = useSelector((state) => state.bGColor.value);
  const bG2Color = useSelector((state) => state.bG2Color.value);
  const bG3Color = useSelector((state) => state.bG3Color.value);
  const [hsva, setHsva] = useState(hexToHsva(bGColor) || { h: 0, s: 0, v: 100, a: 1 });
  const [colorKey, setColorKey] = useState('background');

  console.log(bGColor);
  const dispatch = useDispatch();

  function handleClickSetColor() {
    console.log(hsvaToHex(hsva));
    if (colorKey === 'background') dispatch(selectBGColor(hsvaToHex(hsva)));
    if (colorKey === 'background2') dispatch(selectBG2Color(hsvaToHex(hsva)));
    if (colorKey === 'background3') dispatch(selectBG3Color(hsvaToHex(hsva)));
    if (colorKey === 'text') dispatch(selectTextColor(hsvaToHex(hsva)));
  }

  function handleSelectColorKey(e) {
    setColorKey(e.target.value);
  }

  useEffect(() => {
    console.log('in use effect');
    // Utalise bG2Color, bG3Color etc to display default color in Colorful
  }, [colorKey]);

  return (
    <>
      <h1>Color Selector</h1>
      <label htmlFor='color-key'>Choose a key:</label>
      <select
        name='color-key'
        id='color-key'
        onChange={handleSelectColorKey}
      >
        <option value='background'>Background</option>
        <option value='background2'>Background 2</option>
        <option value='background3'>Background 3</option>
        <option value='text'>Text</option>
        <option value='text2'>Text 2</option>
        <option value='links'>Links</option>
      </select>
      <div className='color-selector-body'>
        <Colorful
          color={hsva}
          disableAlpha={true}
          onChange={(color) => {
            setHsva(color.hsva);
          }}
        />
        <div className='preview-and-btn'>
          <div>
            <span>The color selected:</span>
            <span style={{ background: hsvaToHex(hsva), marginTop: 30, padding: 10 }}>{hsvaToHex(hsva)}</span>
          </div>
          <button onClick={handleClickSetColor}>Set {colorKey} color</button>
        </div>
      </div>
    </>
  );
}

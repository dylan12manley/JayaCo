import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Colorful from '@uiw/react-color-colorful';
import { hsvaToHex, hexToHsva } from '@uiw/color-convert';

import './colorSelector.css';
import { selectBGColor } from './bGColorSlice';

export default function ColorSelector() {
  const bGColor = useSelector((state) => state.bGColor.value);
  const [hsva, setHsva] = useState(hexToHsva(bGColor) || { h: 0, s: 0, v: 100, a: 1 });
  const [colorKey, setColorKey] = useState('background');

  console.log(bGColor);
  const dispatch = useDispatch();

  function handleClickSetColor() {
    console.log(hsvaToHex(hsva));
    dispatch(selectBGColor(hsvaToHex(hsva)));
  }

  return (
    <>
      <h1>Color Selector</h1>
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

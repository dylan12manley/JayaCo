import './form.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { selectMainFont } from '../../reducers/mainFontSlice';
import { selectSecondaryFont } from '../../reducers/secondaryFontSlice';

export default function FontsForm() {
  const [mainFont, setMainFont] = useState('serif');
  const [secondaryFont, setSecondaryFont] = useState('monospace');
  const dispatch = useDispatch();

  function handleSubmitFonts(e) {
    e.preventDefault();
    if (e.target[0]?.value != '') {
      setMainFont(e.target[0].value);
      dispatch(selectMainFont(e.target[0].value));
    }
    if (e.target[1]?.value != '') {
      setSecondaryFont(e.target[1]?.value);
      dispatch(selectSecondaryFont(e.target[1].value));
    }
  }

  return (
    <>
      <form onSubmit={handleSubmitFonts}>
        <h2>Input Fonts</h2>
        <div className='form-input'>
          <label htmlFor='mainFont'>Main Font:</label>
          <input
            type='text'
            id='mainFont'
            name='mainFont'
          ></input>
        </div>
        <div className='form-input'>
          <label htmlFor='secondaryFont'>Secondary Font:</label>
          <input
            type='text'
            id='secondaryFont'
            name='secondaryFont'
          ></input>
        </div>
        <div className='form-input'>
          <button type='submit'>Apply Fonts</button>
        </div>
        <div>
          <h3>Main Font</h3>
          <span style={{ fontFamily: mainFont }}>The Quick Brown Fox Jumps Over The Lazy Dog</span>
          <h3>Secondary Font</h3>
          <span style={{ fontFamily: secondaryFont }}>The Quick Brown Fox Jumps Over The Lazy Dog</span>
        </div>
      </form>
    </>
  );
}

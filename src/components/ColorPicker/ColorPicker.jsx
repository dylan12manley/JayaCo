import { useState, useEffect } from 'react';

export default function ColorPicker(props) {
  const [colorKey, setColorKey] = useState('');

  console.log('the page name is:', props.colorFor);
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
    </>
  );
}

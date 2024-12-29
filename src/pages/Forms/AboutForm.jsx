import { useState } from 'react';

import './form.css';

export default function AboutForm() {
  const [aboutTitle, setAboutTitle] = useState('');
  const [aboutH2, setAboutH2] = useState('');
  const [aboutP1, setAboutP1] = useState('');

  function handleSubmitAbout() {
    console.log('about form submitted');
  }

  return (
    <from onSubmit={handleSubmitAbout}>
      <h2>About Page Form</h2>
      <div className='form-input'>
        <label htmlFor='aboutMainTitle'>About main title:</label>
        <input
          type='text'
          id='aboutMainTitle'
          name='aboutMainTitle'
        ></input>
      </div>
      <div className='form-input'>
        <label htmlFor='aboutH2'>About Header 2:</label>
        <input
          type='text'
          id='aboutH2'
          name='aboutH2'
        ></input>
      </div>
      <div className='form-input'>
        <label htmlFor='aboutParagraph1'>About paragraph 1:</label>
        <input
          type='text'
          id='aboutParagraph1'
          name='aboutParagraph1'
        ></input>
      </div>
      <div className='form-input'>
        <button type='submit'>Send</button>
      </div>
    </from>
  );
}

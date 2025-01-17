import { useState } from 'react';

import './form.css';

export default function AboutForm() {
  const [aboutTitle, setAboutTitle] = useState('');
  const [aboutH2, setAboutH2] = useState('');
  const [aboutP1, setAboutP1] = useState('');

  function handleSubmitAbout(e) {
    e.preventDefault();
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
          placeholder='About'
        ></input>
      </div>
      <div className='form-input'>
        <label htmlFor='aboutSubH1'>About sub-header 1:</label>
        <input
          type='text'
          id='aboutSubH1'
          name='aboutSubH1'
          placeholder='Who we are'
        ></input>
      </div>
      <div className='form-input'>
        <label htmlFor='aboutParagraph1'>About paragraph 1:</label>
        <input
          type='text'
          id='aboutParagraph1'
          name='aboutParagraph1'
          placeholder='Enter text for paragraph 1'
        ></input>
      </div>
      <div className='form-input'>
        <label htmlFor='aboutImgUrl1'>About image url 1:</label>
        <input
          type='text'
          id='aboutImgUrl1'
          name='aboutImgUrl1'
          placeholder='picture-site.com/about-1'
        ></input>
      </div>
      <div className='form-input'>
        <label htmlFor='aboutSubH2'>About sub-header 2:</label>
        <input
          type='text'
          id='aboutSubH2'
          name='aboutSubH2'
          placeholder='Who we are'
        ></input>
      </div>
      <div className='form-input'>
        <label htmlFor='aboutParagraph2'>About paragraph 2:</label>
        <input
          type='text'
          id='aboutParagraph2'
          name='aboutParagraph2'
          placeholder='Enter text for paragraph 2'
        ></input>
      </div>
      <div className='form-input'>
        <label htmlFor='aboutImgUrl2'>About image url 2:</label>
        <input
          type='text'
          id='aboutImgUrl2'
          name='aboutImgUrl2'
          placeholder='picture-site.com/about-2'
        ></input>
      </div>
      <div className='form-input'>
        <label htmlFor='aboutSubH3'>About sub-header 3:</label>
        <input
          type='text'
          id='aboutSubH3'
          name='aboutSubH3'
          placeholder='Who we are'
        ></input>
      </div>
      <div className='form-input'>
        <label htmlFor='aboutParagraph3'>About paragraph 3:</label>
        <input
          type='text'
          id='aboutParagraph3'
          name='aboutParagraph3'
          placeholder='Enter text for paragraph 3'
        ></input>
      </div>
      <div className='form-input'>
        <label htmlFor='aboutImgUrl3'>About image url 3:</label>
        <input
          type='text'
          id='aboutImgUrl3'
          name='aboutImgUrl3'
          placeholder='picture-site.com/about-3'
        ></input>
      </div>
      <div className='form-input'>
        <label htmlFor='aboutSubH4'>About sub-header 4:</label>
        <input
          type='text'
          id='aboutSubH4'
          name='aboutSubH4'
          placeholder='Who we are'
        ></input>
      </div>
      <div className='form-input'>
        <label htmlFor='aboutParagraph4'>About paragraph 4:</label>
        <input
          type='text'
          id='aboutParagraph4'
          name='aboutParagraph4'
          placeholder='Enter text for paragraph 4'
        ></input>
      </div>
      <div className='form-input'>
        <label htmlFor='aboutImgUrl4'>About image url 4:</label>
        <input
          type='text'
          id='aboutImgUrl4'
          name='aboutImgUrl4'
          placeholder='picture-site.com/about-4'
        ></input>
      </div>
      <div className='form-input'>
        <label htmlFor='aboutSubH5'>About sub-header 5:</label>
        <input
          type='text'
          id='aboutSubH5'
          name='aboutSubH5'
          placeholder='Who we are'
        ></input>
      </div>
      <div className='form-input'>
        <label htmlFor='aboutParagraph5'>About paragraph 5:</label>
        <input
          type='text'
          id='aboutParagraph5'
          name='aboutParagraph5'
          placeholder='Enter text for paragraph 5'
        ></input>
      </div>
      <div className='form-input'>
        <label htmlFor='aboutImgUrl5'>About image url 5:</label>
        <input
          type='text'
          id='aboutImgUrl5'
          name='aboutImgUrl5'
          placeholder='picture-site.com/about-5'
        ></input>
      </div>
      <div className='form-input'>
        <button type='submit'>Submit About Form</button>
      </div>
    </from>
  );
}

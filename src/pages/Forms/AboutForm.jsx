import { useState } from 'react';
import useFetch from '../../functions/useFetch';
import './form.css';

export default function AboutForm() {
  const [showHide, setShowHide] = useState('show');

  function handleSubmitAbout(e) {
    e.preventDefault();
    const bodyObj = {
      aboutTitle: e.target[0].value,
      aboutSubH1: e.target[1].value,
      aboutP1: e.target[2].value,
      aboutImgUrl1: e.target[3].value,
      aboutSubH2: e.target[4].value,
      aboutP2: e.target[5].value,
      aboutImgUrl2: e.target[6].value,
      aboutSubH3: e.target[8].value,
      aboutP3: e.target[9].value,
      aboutImgUrl3: e.target[10].value,
      aboutSubH4: e.target[11].value,
      aboutP4: e.target[12].value,
      aboutImgUrl4: e.target[13].value,
      aboutSubH5: e.target[14].value,
      aboutP5: e.target[15].value,
      aboutImgUrl5: e.target[16].value,
    };
    useFetch('about', 'POST', bodyObj);
  }

  function handleClickShowHideBottom() {
    const bottomDiv = document.querySelector('#about-bottom');
    bottomDiv.style.display = showHide === 'show' ? 'block' : 'none';
    showHide === 'show' ? setShowHide('hide') : setShowHide('show');
  }

  return (
    <form onSubmit={handleSubmitAbout}>
      <h2>About Page Form</h2>
      <div className='form-input'>
        <label htmlFor='aboutTitle'>About main title:</label>
        <input
          type='text'
          id='aboutTitle'
          name='aboutTitle'
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
        <label htmlFor='aboutP1'>About paragraph 1:</label>
        <input
          type='text'
          id='aboutP1'
          name='aboutP1'
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
        <label htmlFor='aboutP2'>About paragraph 2:</label>
        <input
          type='text'
          id='aboutP2'
          name='aboutP2'
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
      <button
        type='button'
        onClick={handleClickShowHideBottom}
      >
        {showHide} more fields
      </button>
      <div id='about-bottom'>
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
          <label htmlFor='aboutP3'>About paragraph 3:</label>
          <input
            type='text'
            id='aboutP3'
            name='aboutP3'
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
          <label htmlFor='aboutP4'>About paragraph 4:</label>
          <input
            type='text'
            id='aboutP4'
            name='aboutP4'
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
          <label htmlFor='aboutP5'>About paragraph 5:</label>
          <input
            type='text'
            id='aboutP5'
            name='aboutP5'
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
      </div>
      <div className='form-input'>
        <button type='submit'>Submit About Form</button>
      </div>
    </form>
  );
}

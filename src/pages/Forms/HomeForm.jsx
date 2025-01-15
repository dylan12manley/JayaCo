import React, { useState, useEffect } from 'react';
import './form.css';

export default function HomeForm() {
  const [hasReviews, setHasReviews] = useState(false);
  const [hasCategories, setHasCategories] = useState(false);

  const arrayPlaceholder = ['option1', 'option2', 'option3', 'option4'];

  const [siteName, setSiteName] = useState('');
  const [siteH2, setSiteH2] = useState('');
  const [siteH3, setSiteH3] = useState('');
  const [mainImg, setMainImg] = useState('');

  function handleClickHasReviews(e) {
    e.target.value === 'yes' ? setHasReviews(true) : setHasReviews(false);
  }

  function handleClickHasCategories(e) {
    e.target.value === 'yes' ? setHasCategories(true) : setHasCategories(false);
  }

  function handleSubmitHome(e) {
    e.preventDefault();
    if (e.target[0]?.value != '') setSiteName(e.target[0].value);
    if (e.target[1]?.value != '') setSiteH2(e.target[1]?.value);
    if (e.target[2]?.value != '') setSiteH3(e.target[2]?.value);
    if (e.target[3]?.value != '') setMainImg(e.target[3]?.value);

    fetch('http://localhost:4000/homePage', {
      method: 'POST',
      body: JSON.stringify({
        siteName: e.target[0].value,
        homePageH2: e.target[1]?.value,
        homePageH3: e.target[2]?.value,
        mainImg: e.target[3]?.value,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => {
        console.log(response);
        if ((response.stats = 200)) {
          alert('Data has been successfully added to the database.');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <form
      onSubmit={handleSubmitHome}
      name='homeForm'
    >
      <h2>Home Page Form</h2>
      <div className='form-input'>
        <label htmlFor='siteName'>Site Name:</label>
        <input
          type='text'
          id='siteName'
          name='siteName'
        />
      </div>
      <div className='form-input'>
        <label htmlFor='siteH2'>Site Header 2:</label>
        <input
          type='text'
          id='siteH2'
          name='siteH2'
        />
      </div>
      <div className='form-input'>
        <label htmlFor='siteH3'>Site Header 3:</label>
        <input
          type='text'
          id='siteH3'
          name='siteH3'
        />
      </div>
      <div className='form-input'>
        <label htmlFor='mainImg'>Main image URL:</label>
        <input
          type='text'
          id='mainImg'
          name='mainImg'
        />
      </div>
      <fieldset>
        <legend>Select image style:</legend>
        <div>
          <input
            type='radio'
            id='overlay'
            name='img-type'
            value='overlay'
            checked
          />
          <label htmlFor='overlay'>Text Overlay</label>
        </div>
        <div>
          <input
            type='radio'
            id='no-overlay'
            name='img-type'
            value='no-overlay'
          />
          <label htmlFor='no-overlay'>No Text Overlay</label>
        </div>
      </fieldset>
      <div className='form-input'>
        <label htmlFor='home-text'>Home page text:</label>
        <input
          type='text-field'
          id='home-text'
          name='home-text'
        />
      </div>
      <div className='form-input'>
        <label htmlFor='hBtnText'>Home page button text:</label>
        <input
          type='text'
          id='hBtnText'
          name='hBtnText'
        />
      </div>
      <div className='form-input'>
        <label htmlFor='home-btn-function'>Home page button function:</label>
        <select
          name='home-btn-function'
          id='home-btn-funtion-select'
        >
          <option value='contact'>contact us page redirect</option>
          <option value='contact'>about us page redirect</option>
        </select>
      </div>
      <fieldset>
        <legend>Display reviews on home page?</legend>
        <input
          type='radio'
          id='yes-reviews'
          name='has-reviews'
          value='yes'
          onClick={handleClickHasReviews}
        />
        <label htmlFor='yes-reviews'>Yes</label>
        <input
          type='radio'
          id='no-reviews'
          name='has-reviews'
          value='no'
          onClick={handleClickHasReviews}
        />
        <label htmlFor='no-reviews'>No</label>
        {hasReviews && (
          <fieldset>
            <legend>Select reviews to show on the home page:</legend>
            {arrayPlaceholder.map((option, i) => {
              return (
                <span key={i}>
                  <label htmlFor='option'>{option}</label>
                  <input
                    type='checkbox'
                    value={option}
                  />
                </span>
              );
            })}
          </fieldset>
        )}
      </fieldset>
      <fieldset>
        <legend>Display categories on home page?</legend>
        <input
          type='radio'
          id='yes'
          name='has-categories'
          value='yes'
          onClick={handleClickHasCategories}
        />
        <label htmlFor='yes'>Yes</label>
        <input
          type='radio'
          id='no'
          name='has-categories'
          value='no'
          onClick={handleClickHasCategories}
        />
        <label htmlFor='no'>No</label>
      </fieldset>
      {hasCategories && (
        <fieldset>
          <legend>Select categories to show on the home page:</legend>
          {arrayPlaceholder.map((option, i) => {
            return (
              <span key={i}>
                <label htmlFor='option'>{option}</label>
                <input
                  type='checkbox'
                  value={option}
                />
              </span>
            );
          })}
        </fieldset>
      )}
      <div className='form-input'>
        <button type='submit'>Send</button>
      </div>
      <div className='results-preview'>
        <span>New Site Name: {siteName}</span>
        <span>New Home Page H2: {siteH2}</span>
        <span>New Home Page H3: {siteH3}</span>
        <span>
          New Main Image:
          <img
            src={mainImg}
            alt='main img'
          />
        </span>
      </div>
    </form>
  );
}

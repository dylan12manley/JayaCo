import React, { useState, useEffect } from 'react';
import './form.css';
import useFetch from '../../functions/useFetch';
import getSelectedValue from '../../functions/getSelectedValue';
import getYesNo from '../../functions/getYesNo';
import getChecked from '../../functions/getChecked';

export default function HomeForm() {
  const [hasReviews, setHasReviews] = useState(false);
  const [hasCategories, setHasCategories] = useState(false);

  const arrayPlaceholder = ['option1', 'option2', 'option3', 'option4'];

  const [homeTitle, setHomeTitle] = useState('');
  const [homeH2, setSiteH2] = useState('');
  const [homeH3, setSiteH3] = useState('');
  const [homeImgUrl, setMainImg] = useState('');

  function handleClickHasReviews(e) {
    e.target.value === 'yes' ? setHasReviews(true) : setHasReviews(false);
  }

  function handleClickHasCategories(e) {
    e.target.value === 'yes' ? setHasCategories(true) : setHasCategories(false);
  }

  function handleSubmitHome(e) {
    e.preventDefault();
    if (e.target[0]?.value != '') setHomeTitle(e.target[0].value);
    if (e.target[1]?.value != '') setSiteH2(e.target[1]?.value);
    if (e.target[2]?.value != '') setSiteH3(e.target[2]?.value);
    if (e.target[3]?.value != '') setMainImg(e.target[3]?.value);
    const homeImgType = Array.from(document.querySelectorAll('input[name="img-type"]')).filter((elm) => elm.checked === true)[0]
      ?.value;
    const homeBtnText = document.querySelector('input[name="hBtnText"]').value;
    const homeBtnFunction = getSelectedValue('select[name="home-btn-function"]');
    const hasReviews = getYesNo('input[name="has-reviews"]');
    const reviews = getChecked('.reviews-option');
    const hasCategories = getYesNo('input[name="has-categories"]');
    const categories = getChecked('.categories-options');
    const hasContactForm = getYesNo('input[name="has-contact-us"]');
    const bodyObj = {
      homeTitle: e.target[0].value,
      homeH2: e.target[1]?.value,
      homeH3: e.target[2]?.value,
      homeImgUrl: e.target[3]?.value,
      homeImgType: parseInt(homeImgType),
      homeText: e.target[7]?.value,
      homeBtnText: homeBtnText,
      homeBtnFunction: homeBtnFunction,
      hasReviews: hasReviews,
      selectedReviews: reviews,
      hasCategories: hasCategories,
      selectedCategories: categories,
      hasContactForm: hasContactForm,
    };
    useFetch('homePage', 'POST', bodyObj);
  }

  return (
    <form
      onSubmit={handleSubmitHome}
      name='homeForm'
    >
      <h2>Home Page Form</h2>
      <div className='form-input'>
        <label htmlFor='homeTitle'>Site Name:</label>
        <input
          type='text'
          id='homeTitle'
          name='homeTitle'
          placeholder='Dyl-n-Will Co.'
        />
      </div>
      <div className='form-input'>
        <label htmlFor='homeH2'>Site Header 2:</label>
        <input
          type='text'
          id='homeH2'
          name='homeH2'
          placeholder='A company that does this and that.'
        />
      </div>
      <div className='form-input'>
        <label htmlFor='homeH3'>Site Header 3:</label>
        <input
          type='text'
          id='homeH3'
          name='homeH3'
          placeholder='Est. 2025 - Portland Oregon'
        />
      </div>
      <div className='form-input'>
        <label htmlFor='homeImgUrl'>Main image URL:</label>
        <input
          type='text'
          id='homeImgUrl'
          name='homeImgUrl'
          placeholder='picture-site.com'
        />
      </div>
      <fieldset>
        <legend>Select image style:</legend>
        <div>
          <input
            type='radio'
            id='overlay'
            name='img-type'
            value='1'
          />
          <label htmlFor='overlay'>Text Overlay</label>
        </div>
        <div>
          <input
            type='radio'
            id='no-overlay'
            name='img-type'
            value='2'
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
          placeholder='Describe your company or tell a quick story.'
        />
      </div>
      <div className='form-input'>
        <label htmlFor='hBtnText'>Home page button text:</label>
        <input
          type='text'
          id='hBtnText'
          name='hBtnText'
          placeholder='Contact Us'
        />
      </div>
      <div className='form-input'>
        <label htmlFor='home-btn-function'>Home page button function:</label>
        <select
          name='home-btn-function'
          id='home-btn-funtion-select'
        >
          <option value='1'>contact us page redirect</option>
          <option value='2'>about us page redirect</option>
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
                    className='reviews-option'
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
                  className='categories-options'
                />
              </span>
            );
          })}
        </fieldset>
      )}
      <fieldset>
        <legend>Display Contact Us form on home page?</legend>
        <input
          type='radio'
          id='yes-contact-us'
          name='has-contact-us'
          value='yes'
        />
        <label htmlFor='yes-contact-us'>Yes</label>
        <input
          type='radio'
          id='no-contact-us'
          name='has-contact-us'
          value='no'
        />
        <label htmlFor='no-contact-us'>No</label>
      </fieldset>
      <div className='form-input'>
        <button type='submit'>Submit Home Page Form</button>
      </div>
      <div className='results-preview'>
        <span>New Site Name: {homeTitle}</span>
        <span>New Home Page H2: {homeH2}</span>
        <span>New Home Page H3: {homeH3}</span>
        <span>
          New Main Image:
          <img
            src={homeImgUrl}
            alt='main img'
          />
        </span>
      </div>
    </form>
  );
}

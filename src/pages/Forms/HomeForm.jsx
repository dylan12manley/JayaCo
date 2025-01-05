import React, { useState, useEffect } from 'react';
import './form.css';

export default function HomeForm() {
  const [siteName, setSiteName] = useState('');
  const [siteH2, setSiteH2] = useState('');
  const [siteH3, setSiteH3] = useState('');
  const [mainImg, setMainImg] = useState('');

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
    <form onSubmit={handleSubmitHome}>
      <h2>Home Page Form</h2>
      <div className='form-input'>
        <label htmlFor='siteName'>Site Name:</label>
        <input
          type='text'
          id='siteName'
          name='siteName'
        ></input>
      </div>
      <div className='form-input'>
        <label htmlFor='siteH2'>Site Header 2:</label>
        <input
          type='text'
          id='siteH2'
          name='siteH2'
        ></input>
      </div>
      <div className='form-input'>
        <label htmlFor='siteH3'>Site Header 3:</label>
        <input
          type='text'
          id='siteH3'
          name='siteH3'
        ></input>
      </div>
      <div className='form-input'>
        <label htmlFor='mainImg'>Main Img URL:</label>
        <input
          type='text'
          id='mainImg'
          name='mainImg'
        ></input>
      </div>
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

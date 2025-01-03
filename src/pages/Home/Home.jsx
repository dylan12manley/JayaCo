import './home.css';
import React, { useState, useEffect } from 'react';

export default function Home() {
  const [data, setData] = useState([]);
  const [arrLen, setArrLen] = useState(0);

  useEffect(() => {
    fetch('http://localhost:4000/homePage')
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setData(json);
        console.log(json);
        setArrLen(json.length - 1);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return data.length == 0 ? (
    'Loading...'
  ) : (
    <main id='home-page'>
      <h1>{data[arrLen]?.siteName}</h1>
      <img
        src={data[arrLen]?.mainImg}
        alt="Jaya's main photo"
      />
      <h2>{data[arrLen]?.homePageH2}</h2>
      <h3>{data[arrLen]?.homePageH3}</h3>
    </main>
  );
}

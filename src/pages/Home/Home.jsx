import './home.css';
import React, { useState, useEffect } from 'react';

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/homePage')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data.length);
        setData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return data.length == 0 ? (
    'Loading...'
  ) : (
    <main id='home-page'>
      <h1>{data[0].siteName}</h1>
      <h2>{data[0].homePageH2}</h2>
      <h3>{data[0].homePageH3}</h3>
    </main>
  );
}

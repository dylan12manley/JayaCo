import './home.css';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

export default function Home() {
  const [data, setData] = useState([]);
  const [arrLen, setArrLen] = useState(0);

  const bGColor = useSelector((state) => state.bGColor.value);
  const bG2Color = useSelector((state) => state.bG2Color.value);
  const bG3Color = useSelector((state) => state.bG3Color.value);
  const textColor = useSelector((state) => state.textColor.value);

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
      <span>Background color is:</span>
      <span style={{ background: bGColor }}>{bGColor}</span>
      <br />
      <span>Background color 2 is:</span>
      <span style={{ background: bG2Color }}>{bG2Color}</span>
      <br />
      <span>Background color 3 is:</span>
      <span style={{ background: bG3Color }}>{bG3Color}</span>
      <br />
      <span style={{ color: textColor, background: bGColor }}>This is the text color: {textColor}</span>
    </main>
  );
}

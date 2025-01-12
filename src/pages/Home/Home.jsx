import './home.css';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { GET } from '../../functions/fetch';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [dataLength, setDataLength] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await GET('homePage');
        if (data) {
          setData(data);
          setDataLength(data.length - 1);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const bGColor = useSelector((state) => state.bG1.value);
  const bG2Color = useSelector((state) => state.bG2.value);
  const bG3Color = useSelector((state) => state.bG3.value);
  const textColor = useSelector((state) => state.textColor1.value);

  return isLoading ? (
    'Loading...'
  ) : (
    <main id='home-page'>
      <h1>{data[dataLength]?.siteName}</h1>
      <img
        src={data[dataLength]?.mainImg}
        alt="Jaya's main photo"
      />
      <h2>{data[dataLength]?.homePageH2}</h2>
      <h3>{data[dataLength]?.homePageH3}</h3>
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

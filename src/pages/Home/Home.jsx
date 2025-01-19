import './home.css';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { GET } from '../../functions/fetch';

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(useSelector((state) => state.home.value));
  const [dataLength, setDataLength] = useState(0);

  useEffect(() => {
    console.log(data[11]);
    if (data.length > 0) {
      setDataLength(data.length - 1);
      return;
    }
    const fetchData = async () => {
      setIsLoading(true);
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

  return isLoading ? (
    'Home page content is loading...'
  ) : (
    <main id='home-page'>
      <h1>{data[dataLength]?.homeTitle}</h1>
      <img
        src={data[dataLength]?.homeImgUrl}
        alt="Jaya's main photo"
      />
      <h2>{data[dataLength]?.homeH2}</h2>
      <h3>{data[dataLength]?.homeH3}</h3>
    </main>
  );
}

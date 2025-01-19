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

  console.log(data);

  return isLoading ? (
    'Loading...'
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

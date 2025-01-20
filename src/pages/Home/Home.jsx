import './home.css';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GET } from '../../functions/fetch';
import { setHome } from '../../reducers/homeSlice';

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(useSelector((state) => state.home.value));
  const [dataLength, setDataLength] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log(data);
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
          dispatch(setHome(data));
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

  return (
    <main id='home-page'>
      {isLoading ? (
        'home page content is loading...'
      ) : (
        <>
          <h1>{data[dataLength]?.homeTitle}</h1>
          <img
            src={data[dataLength]?.homeImgUrl}
            alt="Jaya's main photo"
          />
          <h2>{data[dataLength]?.homeH2}</h2>
          <h3>{data[dataLength]?.homeH3}</h3>
        </>
      )}
    </main>
  );
}

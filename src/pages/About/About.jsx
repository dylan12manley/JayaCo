import { useEffect, useState } from 'react';
import { GET } from '../../functions/fetch';
import './about.css';
import { useSelector, useDispatch } from 'react-redux';
import { setAbout } from '../../reducers/aboutSlice';

export default function About() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(useSelector((state) => state.about.value));
  const [dataLength, setDataLength] = useState(0);
  const [articles, setArticles] = useState([]);

  function pushDataToArray(data) {
    const tempArticles = [];
    const activeData = data[data.length - 1];
    ['1', '2', '3', '4', '5'].forEach((num) => {
      const article = {};
      let index = 0;
      [`aboutP${num}`, `aboutSubH${num}`, `aboutImgUrl${num}`].forEach((val) => {
        let key = 'p';
        if (index === 1) key = 'h';
        if (index === 2) key = 'img';
        if (activeData[val].length > 0) article[key] = activeData[val];
        index++;
      });
      if (Object.keys(article).length > 0) {
        tempArticles.push(article);
      }
    });
    setArticles(tempArticles);
  }

  useEffect(() => {
    if (data.length > 0) {
      setDataLength(data.length - 1);
      return;
    }
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const { data } = await GET('about');
        if (data) {
          setData(data);
          dispatch(setAbout(data));
          setDataLength(data.length - 1);
          pushDataToArray(data);
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
    <main id='about-page'>
      {data[dataLength]?.aboutTitle == undefined || isLoading ? (
        'loading...'
      ) : (
        <>
          <h1>{data[dataLength].aboutTitle}</h1>
          {articles.length > 0 &&
            articles.map((article, i) => {
              return (
                <article key={i}>
                  <h2>{article?.h}</h2>
                  <div className='about-art'>
                    {i % 2 === 0 ? (
                      <p>{article?.p}</p>
                    ) : (
                      article.img && (
                        <img
                          src={article.img}
                          alt={`about us image ${i + 1}`}
                        />
                      )
                    )}
                    {i % 2 === 0 ? (
                      article.img && (
                        <img
                          src={article.img}
                          alt={`about us image ${i + 1}`}
                        />
                      )
                    ) : (
                      <p>{article?.p}</p>
                    )}
                  </div>
                </article>
              );
            })}
        </>
      )}
    </main>
  );
}

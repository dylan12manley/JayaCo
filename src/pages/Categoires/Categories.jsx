import { useState, useEffect } from 'react';
import { GET } from '../../functions/fetch';
import CategoryForm from '../Forms/CategoryForm';
import './Categories.css';

export default function Categories() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await GET('categories');
        if (data) {
          setData(data);
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

  return (
    <main className='categories-page'>
      <h1>Create Categories</h1>
      <p>Each category can contain multiple articles</p>

      {isLoading ? (
        'loading categories...'
      ) : (
        <div className='all-categories'>
          {data.map((cat, i) => {
            return (
              <div
                key={i}
                className='category'
              >
                <h2>{cat.catTitle}</h2>
                <div className='cat-body'>
                  {cat.catImgUrl && (
                    <img
                      src={cat.catImgUrl}
                      alt={`${cat.catTitle} image`}
                      className='cat-img'
                    />
                  )}
                  <div className='cat-h3-and-text'>
                    {cat.catSubHeader && <h3>{cat.catSubHeader}</h3>}
                    {cat.catText && <p>{cat.catText}</p>}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </main>
  );
}

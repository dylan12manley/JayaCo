import { useState, useEffect } from 'react';
import { GET } from '../../functions/fetch';
import ArticleForm from '../Forms/ArticleForm';
import Article from './Article/Article';
import './Categories.css';

export default function Categories() {
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchTable = async (table) => {
      try {
        const { data } = await GET(table);
        if (data) {
          table === 'categories' ? setCategories(data) : setArticles(data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTable('categories');
    fetchTable('categoryArticles');
  }, []);

  useEffect(() => {
    if (!isLoading) {
      const dialogs = document.querySelectorAll('dialog');
      const showButtons = document.querySelectorAll('dialog + button');
      const closeButtons = document.querySelectorAll('.close-article-dialog');
      let loopIndex = 0;
      dialogs.forEach((d) => {
        showButtons[loopIndex].addEventListener('click', () => {
          d.showModal();
        });
        closeButtons[loopIndex].addEventListener('click', () => {
          d.close();
        });
        loopIndex++;
      });
    }
  }, [isLoading]);

  function getCatImg(cat) {
    if (cat.catImgUrl)
      return (
        <img
          src={cat.catImgUrl}
          alt={`${cat.catTitle} image`}
          className='cat-img'
        />
      );
  }

  function getCatRest(cat) {
    return (
      <div className='cat-h3-and-text'>
        {cat.catSubHeader && <h3>{cat.catSubHeader}</h3>}
        {cat.catText && <p>{cat.catText}</p>}
      </div>
    );
  }

  return (
    <main className='categories-page'>
      <h1>Create Categories</h1>
      <p>Each category can contain multiple articles</p>

      {isLoading ? (
        'loading categories...'
      ) : (
        <div className='all-categories'>
          {categories.map((cat, i) => {
            return (
              <div
                key={i}
                className='category'
              >
                <h2>{cat.catTitle}</h2>
                <div className='cat-body'>
                  {i % 2 === 0 ? getCatRest(cat) : getCatImg(cat)}
                  {i % 2 != 0 ? getCatRest(cat) : getCatImg(cat)}
                </div>
                <div className='articles'>
                  {articles
                    .filter((article) => parseInt(article.categoryId) === cat.id)
                    .map((article, i) => {
                      return (
                        <Article
                          data={article}
                          index={i}
                          key={i}
                        />
                      );
                    })}
                </div>
                <dialog>
                  <button
                    autoFocus
                    className='close-article-dialog'
                  >
                    Close
                  </button>
                  <ArticleForm
                    catId={cat.id}
                    catTitle={cat.catTitle}
                  />
                </dialog>
                <button className='show-article-dialog'>Add articles</button>
              </div>
            );
          })}
        </div>
      )}
    </main>
  );
}

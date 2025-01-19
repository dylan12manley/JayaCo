import { useState, useEffect } from 'react';
import useFetch from '../../functions/useFetch';

export default function CategoryForm() {
  const [hasArticles, setHasArticles] = useState(false);
  function handleSubmitCategory(e) {
    e.preventDefault();
    const articles = [];
    Array.from(document.querySelectorAll('.article-option'))
      .filter((elm) => elm.checked)
      .forEach((article) => articles.push(article.value));
    const bodyObj = {
      catTitle: e.target[0].value,
      catImgUrl: e.target[1].value,
      catSubHeader: e.target[2].value,
      catText: e.target[3].value,
      articles: articles.toString(),
    };
    useFetch('categories', 'POST', bodyObj);
  }

  function handleClickhasArticles(e) {
    e.target.value === 'yes' ? setHasArticles(true) : setHasArticles(false);
  }
  const arrayPlaceholder = ['option1', 'option2', 'option3', 'option4'];
  return (
    <main>
      <form
        onSubmit={handleSubmitCategory}
        name='categoryForm'
      >
        <h2>Category Form</h2>
        <div className='form-input'>
          <label htmlFor='catTitle'>Category Title:</label>
          <input
            type='text'
            id='catTitle'
            name='catTitle'
            placeholder='Category A'
          />
        </div>
        <div className='form-input'>
          <label htmlFor='catImgUrl'>Category Image Url:</label>
          <input
            type='text'
            id='catImgUrl'
            name='catImgUrl'
            placeholder='picture-site.com/category'
          />
        </div>
        <div className='form-input'>
          <label htmlFor='catSubHeader'>Category Sub Header:</label>
          <input
            type='text'
            id='catSubHeader'
            name='catSubHeader'
            placeholder='A brief description of the category'
          />
        </div>
        <div className='form-input'>
          <label htmlFor='catTextBody'>Category Text Field:</label>
          <input
            type='text-field'
            id='catTextBody'
            name='catTextBody'
            placeholder='A longer description of the category'
          />
        </div>
        <fieldset>
          <legend>Does Category Have Articles?</legend>
          <input
            type='radio'
            id='hasArticles'
            name='has-articles'
            value='yes'
            onClick={handleClickhasArticles}
          />
          <label htmlFor='hasArticles'>yes</label>
          <input
            type='radio'
            id='noArticles'
            name='has-articles'
            value='no'
            onClick={handleClickhasArticles}
          />
          <label htmlFor='noArticles'>no</label>
          {hasArticles && (
            <fieldset>
              <legend>Select articles to include:</legend>
              {arrayPlaceholder.map((article, i) => {
                return (
                  <span key={i}>
                    <label htmlFor='article'>{article}</label>
                    <input
                      type='checkbox'
                      value={article}
                      className='article-option'
                    />
                  </span>
                );
              })}
            </fieldset>
          )}
        </fieldset>
        <div className='form-input'>
          <button type='submit'>Submit Category</button>
        </div>
      </form>
    </main>
  );
}

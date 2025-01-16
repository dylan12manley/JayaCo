import { useState, useEffect } from 'react';
export default function CategoryForm() {
  const [hasArticles, setHasArticles] = useState(false);
  function handleSubmitCategory(e) {
    console.log(e);
  }
  function handleClickhasArticles(e) {
    e.target.value === 'yes' ? setHasArticles(true) : setHasArticles(false);
  }
  const arrayPlaceholder = ['option1', 'option2', 'option3', 'option4'];
  return (
    <>
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
          />
        </div>
        <div className='form-input'>
          <label htmlFor='catImgUrl'>Category Image Url:</label>
          <input
            type='text'
            id='catImgUrl'
            name='catImgUrl'
          />
        </div>
        <div className='form-input'>
          <label htmlFor='catSubHeader'>Category Sub Header:</label>
          <input
            type='text'
            id='catSubHeader'
            name='catSubHeader'
          />
        </div>
        <div className='form-input'>
          <label htmlFor='catTextBody'>Category Text Field:</label>
          <input
            type='text-field'
            id='catTextBody'
            name='catTextBody'
          />
        </div>
        <fieldset>
          <legend>Does Category Have Articles?</legend>
          <input
            type='radio'
            id='hasArticles'
            name='hasArticles'
            value='yes'
            onClick={handleClickhasArticles}
          />
          <label htmlFor='hasArticles'>yes</label>
          <input
            type='radio'
            id='noArticles'
            name='noArticles'
            value='no'
            onClick={handleClickhasArticles}
          />
          <label htmlFor='noArticles'>no</label>
          {hasArticles && (
            <fieldset>
              <legend>Select articles to include:</legend>
              {arrayPlaceholder.map((option, i) => {
                return (
                  <span key={i}>
                    <label htmlFor='option'>{option}</label>
                    <input
                      type='checkbox'
                      value={option}
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
    </>
  );
}

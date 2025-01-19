import { useState } from 'react';
import useFetch from '../../functions/useFetch';

export default function ArticleForm({ catId, catTitle }) {
  const [addMore, setAddMore] = useState(false);
  const [addEvenMore, setAddEvenMore] = useState(false);

  function handleSubmitArticleForm(e) {
    e.preventDefault();
    let indexAdjustment = 0;
    if (!addEvenMore && addMore) indexAdjustment = -2;
    if (!addMore) indexAdjustment = -7;
    const bodyObj = {
      articleTitle: e.target[0].value,
      articleImgUrlOne: e.target[1].value,
      articleTextOne: e.target[2].value,
      articleImgUrlTwo: addMore ? e.target[6]?.value : null,
      articleTextTwo: addMore ? e.target[7]?.value : null,
      articleImgUrlThree: addMore && addEvenMore ? e.target[11 + indexAdjustment]?.value : null,
      articleTextThree: addMore && addEvenMore ? e.target[12 + indexAdjustment]?.value : null,
      articleStyle: parseInt(e.target[13 + indexAdjustment]?.value),
      categoryId: catId,
    };
    useFetch('categoryArticles', 'POST', bodyObj);
  }

  function handleClickAddMore(e) {
    const yesNo = e.target.value === 'yes' ? true : false;
    if (e.target.name === 'addMore') setAddMore(yesNo);
    if (e.target.name === 'addEvenMore') setAddEvenMore(yesNo);
  }
  return (
    <>
      <form
        onSubmit={handleSubmitArticleForm}
        name='article-form'
      >
        <h2>Add article to {catTitle}</h2>
        <div className='form-input'>
          <label htmlFor='articleTitle'>Article Title:</label>
          <input
            type='text'
            id='articleTitle'
            name='articleTitle'
            placeholder='Name of the project'
          />
        </div>
        <div className='form-input'>
          <label htmlFor='artImg1Url'>Article Image 1 Url:</label>
          <input
            type='text'
            id='artImg1Url'
            name='artImg1Url'
            placeholder='pitcure-site.com/something'
          />
        </div>
        <div className='form-input'>
          <label htmlFor='artTextBody1'>Article Text Body 1:</label>
          <input
            type='text-field'
            id='artTextBody1'
            name='artTextBody1'
            placeholder='Enter description of the project.'
          />
        </div>
        <fieldset>
          <legend>Add more content to article?</legend>
          <input
            type='radio'
            id='yes'
            name='addMore'
            value='yes'
            onClick={handleClickAddMore}
          />
          <label htmlFor='yes'>Yes</label>
          <input
            type='radio'
            id='no'
            name='addMore'
            value='no'
            onClick={handleClickAddMore}
          />
          <label htmlFor='no'>No</label>
        </fieldset>
        {addMore && (
          <>
            <div className='form-input'>
              <label htmlFor='artImg2Url'>Article Image 2 Url:</label>
              <input
                type='text'
                id='artImg2Url'
                name='artImg2Url'
                placeholder='pitcure-site.com/something-2'
              />
            </div>
            <div className='form-input'>
              <label htmlFor='artTextBody2'>Article Text Body 2:</label>
              <input
                type='text-field'
                id='artTextBody2'
                name='artTextBody2'
                placeholder='Enter the second part of the description of the project.'
              />
            </div>
            <fieldset>
              <legend>Add even more content to article?</legend>
              <input
                type='radio'
                id='yes'
                name='addEvenMore'
                value='yes'
                onClick={handleClickAddMore}
              />
              <label htmlFor='yes'>Yes</label>
              <input
                type='radio'
                id='no'
                name='addEvenMore'
                value='no'
                onClick={handleClickAddMore}
              />
              <label htmlFor='no'>No</label>
            </fieldset>
            {addEvenMore && (
              <>
                <div className='form-input'>
                  <label htmlFor='artImg3Url'>Article Image 3 Url:</label>
                  <input
                    type='text'
                    id='artImg3Url'
                    name='artImg3Url'
                    placeholder='pitcure-site.com/something-3'
                  />
                </div>
                <div className='form-input'>
                  <label htmlFor='artTextBody3'>Article Text Body 3:</label>
                  <input
                    type='text-field'
                    id='artTextBody3'
                    name='artTextBody3'
                    placeholder='Enter the third part of the description of the project.'
                  />
                </div>
              </>
            )}
          </>
        )}
        <div className='form-input'>
          <label htmlFor='articleStyle'>Article style:</label>
          <select
            name='articleStyle'
            id='articleStyle'
          >
            <option value='1'>style 1</option>
            <option value='2'>style 2</option>
          </select>
        </div>
        <div className='form-input'>
          <button type='submit'>Submit Article</button>
        </div>
      </form>
    </>
  );
}

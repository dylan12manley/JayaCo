import { useState } from 'react';

export default function ArticleForm() {
  const [addMore, setAddMore] = useState(false);
  const [addEvenMore, setAddEvenMore] = useState(false);

  function handleSubmitArticleForm(e) {
    console.log(e);
  }

  function handleClickAddMore(e) {
    const yesNo = e.target.value === 'yes' ? true : false;
    e.target.name === 'addMore' ? setAddMore(yesNo) : setAddEvenMore(yesNo);
  }
  return (
    <>
      <form
        onSubmit={handleSubmitArticleForm}
        name='article-form'
      >
        <h2>Article Form</h2>
        <div className='form-input'>
          <label htmlFor='articleTitle'>Article Title:</label>
          <input
            type='text'
            id='articleTitle'
            name='articleTitle'
          />
        </div>
        <div className='form-input'>
          <label htmlFor='artImg1Url'>Article Image 1 Url:</label>
          <input
            type='text'
            id='artImg1Url'
            name='artImg1Url'
          />
        </div>
        <div className='form-input'>
          <label htmlFor='artSubHeader1'>Article Sub Header 1:</label>
          <input
            type='text'
            id='artSubHeader1'
            name='artSubHeader1'
          />
        </div>
        <div className='form-input'>
          <label htmlFor='artTextBody1'>Article Text Body 1:</label>
          <input
            type='text-field'
            id='artTextBody1'
            name='artTextBody1'
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
              />
            </div>
            <div className='form-input'>
              <label htmlFor='artSubHeader2'>Article Sub Header 2:</label>
              <input
                type='text'
                id='artSubHeader2'
                name='artSubHeader2'
              />
            </div>
            <div className='form-input'>
              <label htmlFor='artTextBody2'>Article Text Body 2:</label>
              <input
                type='text-field'
                id='artTextBody2'
                name='artTextBody2'
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
                  />
                </div>
                <div className='form-input'>
                  <label htmlFor='artSubHeader3'>Article Sub Header 3:</label>
                  <input
                    type='text'
                    id='artSubHeader3'
                    name='artSubHeader3'
                  />
                </div>
                <div className='form-input'>
                  <label htmlFor='artTextBody3'>Article Text Body 3:</label>
                  <input
                    type='text-field'
                    id='artTextBody3'
                    name='artTextBody3'
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

export default function ReviewForm() {
  function handleSubmitReview(e) {
    e.preventDefault();
    console.log(e);
  }

  return (
    <form onSubmit={handleSubmitReview}>
      <h2>Review Form</h2>
      <div className='form-input'>
        <label htmlFor='reviewTitle'>Review Title:</label>
        <input
          type='text'
          id='reviewTitle'
          name='reviewTitle'
          placeholder='It was great!'
        />
      </div>
      <div className='form-input'>
        <label htmlFor='reviewScore'>Review Score (out of 10):</label>
        <input
          type='number'
          id='reviewScore'
          name='reviewScore'
          placeholder='10'
        />
      </div>
      <div className='form-input'>
        <label htmlFor='reviewText'>Review Text:</label>
        <input
          type='text-field'
          id='reviewText'
          name='reviewText'
          placeholder='Enter the full review here.'
        />
      </div>
      <div className='form-input'>
        <label htmlFor='reviewerName'>Reviewer Name:</label>
        <input
          type='text'
          id='reviewerName'
          name='reviewerName'
          placeholder='John Doe'
        />
      </div>
      <div className='form-input'>
        <label htmlFor='reviewDate'>Review Date:</label>
        <input
          type='date'
          id='reviewDate'
          name='reviewDate'
        />
      </div>
      <div>
        <button type='submit'>Submit Article</button>
      </div>
    </form>
  );
}

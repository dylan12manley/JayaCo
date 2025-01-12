import './form.css';
import useFetch from '../../functions/useFetch';

export default function CompanyInfoForm() {
  function handleSubmitGeneralInfo(e) {
    e.preventDefault();
    const bodObj = {
      companyName: e.target[0]?.value,
      address: e.target[1]?.value,
      city: e.target[2]?.value,
      state: e.target[3]?.value,
      zip: e.target[4]?.value,
      phoneNumber: e.target[5]?.value,
      email: e.target[6]?.value,
      hours: e.target[7]?.value,
    };
    useFetch('companyInfo', 'POST', bodObj);
  }
  return (
    <>
      <h2>General Info</h2>
      <form onSubmit={handleSubmitGeneralInfo}>
        <div className='form-input'>
          <label htmlFor='companyName'>Company Name:</label>
          <input
            type='text'
            id='companyName'
            name='companyName'
          ></input>
        </div>
        <div className='form-input'>
          <label htmlFor='address'>Address:</label>
          <input
            type='text'
            id='address'
            name='address'
          ></input>
        </div>
        <div className='form-input'>
          <label htmlFor='city'>City:</label>
          <input
            type='text'
            id='city'
            name='city'
          ></input>
        </div>
        <div className='form-input'>
          <label htmlFor='state'>State:</label>
          <input
            type='text'
            id='state'
            name='state'
          ></input>
        </div>
        <div className='form-input'>
          <label htmlFor='zip'>Zip Code:</label>
          <input
            type='text'
            id='zip'
            name='zip'
          ></input>
        </div>
        <div className='form-input'>
          <label htmlFor='phoneNumber'>Phone Number:</label>
          <input
            type='text'
            id='phoneNumber'
            name='phoneNumber'
          ></input>
        </div>
        <div className='form-input'>
          <label htmlFor='email'>Email:</label>
          <input
            type='text'
            id='email'
            name='email'
          ></input>
        </div>
        <div className='form-input'>
          <label htmlFor='hours'>Hours of Opperation:</label>
          <input
            type='text'
            id='hours'
            name='hours'
          ></input>
        </div>
        <div className='form-input'>
          <button type='submit'>Send</button>
        </div>
      </form>
    </>
  );
}

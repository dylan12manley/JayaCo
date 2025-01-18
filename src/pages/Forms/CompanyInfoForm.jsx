import './form.css';
import useFetch from '../../functions/useFetch';

export default function CompanyInfoForm() {
  function handleSubmitGeneralInfo(e) {
    e.preventDefault();
    const socialCheckboxes = document.querySelectorAll('.social-checkbox');
    const socialUrls = document.querySelectorAll('.social-url');
    const bodObj = {
      companyName: e.target[0]?.value,
      address: e.target[1]?.value,
      city: e.target[2]?.value,
      state: e.target[3]?.value,
      zip: e.target[4]?.value,
      phoneNumber: e.target[5]?.value,
      email: e.target[6]?.value,
      hours: e.target[7]?.value,
      facebookUrl: socialCheckboxes[0].checked === true ? socialUrls[0].value : null,
      instagramUrl: socialCheckboxes[1].checked === true ? socialUrls[1].value : null,
      twitterUrl: socialCheckboxes[2].checked === true ? socialUrls[2].value : null,
      youtubeUrl: socialCheckboxes[3].checked === true ? socialUrls[3].value : null,
      linkedinUrl: socialCheckboxes[4].checked === true ? socialUrls[4].value : null,
    };
    useFetch('companyInfo', 'POST', bodObj);
    window.location.href = 'http://localhost:5173/main-form';
  }
  const socialMediaArr = ['facebook', 'instagram', 'twitter', 'youtube', 'linkedin'];
  return (
    <main>
      <form onSubmit={handleSubmitGeneralInfo}>
        <h2>General Info</h2>
        <div className='form-input'>
          <label htmlFor='companyName'>Company Name:</label>
          <input
            type='text'
            id='companyName'
            name='companyName'
            placeholder='Dyl-n-Will Co.'
            required
          />
        </div>
        <div className='form-input'>
          <label htmlFor='address'>Address:</label>
          <input
            type='text'
            id='address'
            name='address'
            placeholder='123 NE 4th Street'
          />
        </div>
        <div className='form-input'>
          <label htmlFor='city'>City:</label>
          <input
            type='text'
            id='city'
            name='city'
            placeholder='Portland'
          />
        </div>
        <div className='form-input'>
          <label htmlFor='state'>State:</label>
          <input
            type='text'
            id='state'
            name='state'
            placeholder='Oregon'
          />
        </div>
        <div className='form-input'>
          <label htmlFor='zip'>Zip Code:</label>
          <input
            type='text'
            id='zip'
            name='zip'
            placeholder='97212'
          />
        </div>
        <div className='form-input'>
          <label htmlFor='phoneNumber'>Phone Number:</label>
          <input
            type='text'
            id='phoneNumber'
            name='phoneNumber'
            pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
            placeholder='123-456-7890'
          />
        </div>
        <div className='form-input'>
          <label htmlFor='email'>Email:</label>
          <input
            type='text'
            id='email'
            name='email'
            placeholder='name@site.com'
          />
        </div>
        <div className='form-input'>
          <label htmlFor='hours'>Hours of Opperation:</label>
          <input
            type='text'
            id='hours'
            name='hours'
            placeholder='Mon-Fri 8am-6pm'
          />
        </div>
        <fieldset>
          <legend>Select social media accounts and add urls:</legend>
          {socialMediaArr.map((site, i) => {
            return (
              <div key={i}>
                <label htmlFor={`${site}-checkbox`}>{site}</label>
                <input
                  type='checkbox'
                  value={site}
                  name={`${site}-checkbox`}
                  className='social-checkbox'
                />
                <span>
                  <label htmlFor={`${site}-url`}>url:</label>
                  <input
                    type='text'
                    id={`${site}-url`}
                    name={`${site}-url`}
                    placeholder={`www.${site}.com/your-company`}
                    className='social-url'
                  ></input>
                </span>
              </div>
            );
          })}
        </fieldset>
        <div className='form-input'>
          <button type='submit'>Submit Company Info</button>
        </div>
      </form>
    </main>
  );
}

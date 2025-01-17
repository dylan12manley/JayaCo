import './form.css';
import useFetch from '../../functions/useFetch';

export default function HeaderForm() {
  const arrayPlaceholder = ['elm1', 'elm2', 'elm3', 'elm4', 'elm5'];

  function handleSubmitFooterHeader(e) {
    e.preventDefault();
    const hElmsArr = [];
    Array.from(document.querySelectorAll('.header-element'))
      .filter((elm) => elm.checked)
      .forEach((elm) => hElmsArr.push(elm.value));
    const headerStyle = Array.from(document.querySelectorAll('select[name="header-style"]')[0]).filter(
      (elm) => elm.selected === true
    )[0].value;
    const fElmsArr = [];
    Array.from(document.querySelectorAll('.footer-element'))
      .filter((elm) => elm.checked)
      .forEach((elm) => fElmsArr.push(elm.value));
    const footerStyle = Array.from(document.querySelectorAll('select[name="footer-style"]')[0]).filter(
      (elm) => elm.selected === true
    )[0].value;
    const bodyObj = {
      smallLogoUrl: e.target[0].value,
      headerElms: hElmsArr.toString(),
      headerStyle: parseInt(headerStyle),
      footerElms: fElmsArr.toString(),
      footerStyle: footerStyle,
    };
    useFetch('headerFooter', 'POST', bodyObj);
  }
  return (
    <main>
      <form onSubmit={handleSubmitFooterHeader}>
        <h2>Edit the header</h2>
        <div className='form-input'>
          <label htmlFor='smallLogoUrl'>Small Logo URL:</label>
          <input
            type='text'
            id='smallLogoUrl'
            name='smallLogoUrl'
            placeholder='picture-site.com/small-logo.jpg'
          />
        </div>
        <fieldset>
          <legend>Select elements to be rendered in the header:</legend>
          {arrayPlaceholder.map((headerElm, i) => {
            return (
              <span key={i}>
                <label htmlFor='headerElm'>{headerElm}</label>
                <input
                  type='checkbox'
                  value={headerElm}
                  className='header-element'
                />
              </span>
            );
          })}
        </fieldset>
        <div className='form-input'>
          <label htmlFor='header-style'>Select header style:</label>
          <select
            name='header-style'
            id='header-style'
          >
            <option value='1'>style 1</option>
            <option value='2'>style 2</option>
            <option value='3'>style 3</option>
          </select>
        </div>
        <fieldset>
          <legend>Select elements to be rendered in the footer:</legend>
          {arrayPlaceholder.map((footerElm, i) => {
            return (
              <span key={i}>
                <label htmlFor='footerElm'>{footerElm}</label>
                <input
                  type='checkbox'
                  value={footerElm}
                  className='footer-element'
                />
              </span>
            );
          })}
        </fieldset>
        <div className='form-input'>
          <label htmlFor='footer-style'>Select footer style:</label>
          <select
            name='footer-style'
            id='footer-style'
          >
            <option value='1'>style 1</option>
            <option value='2'>style 2</option>
            <option value='3'>style 3</option>
          </select>
        </div>
        <div className='form-input'>
          <button type='submit'>Submit Header/Footer Form</button>
        </div>
      </form>
    </main>
  );
}

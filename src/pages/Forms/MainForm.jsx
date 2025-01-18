import './form.css';
import { useSelector } from 'react-redux';
import ColorPicker from '../../components/ColorPicker/ColorPicker';
import FontsForm from './FontsForm';
import useFetch from '../../functions/useFetch';

export default function MainForm() {
  const bg1 = useSelector((state) => state.bG1.value);
  const bg2 = useSelector((state) => state.bG2.value);
  const bg3 = useSelector((state) => state.bG3.value);
  const headerBg = useSelector((state) => state.headerBG.value);
  const textColor1 = useSelector((state) => state.textColor1.value);
  const textColor2 = useSelector((state) => state.textColor2.value);
  const headerTextColor = useSelector((state) => state.headerTextColor.value);
  const btn1BG = useSelector((state) => state.btn1BG.value);
  const btn1Hover = useSelector((state) => state.btn1Hover.value);
  const btn1TextColor = useSelector((state) => state.btn1TextColor.value);
  const btn2BG = useSelector((state) => state.btn2BG.value);
  const btn2Hover = useSelector((state) => state.btn2Hover.value);
  const btn2TextColor = useSelector((state) => state.btn2TextColor.value);
  const mainFont = useSelector((state) => state.mainFont.value);
  const secondaryFont = useSelector((state) => state.secondaryFont.value);

  function handleClickGeneralStyling(e) {
    e.preventDefault();
    const bodyObj = {
      mainFont: mainFont,
      secondaryFont: secondaryFont,
      bg1: bg1,
      bg2: bg2,
      bg3: bg3,
      textColor1: textColor1,
      textColor2: textColor2,
      headerBg: headerBg,
      headerTextColor: headerTextColor,
      btn1Bg: btn1BG,
      btn2Bg: btn2BG,
      btn1TextColor: btn1TextColor,
      btn2TextColor: btn2TextColor,
      btn1Hover: btn1Hover,
      btn2Hover: btn2Hover,
    };
    useFetch('general', 'POST', bodyObj);
    window.location.href = 'http://localhost:5173/header-form';
  }
  return (
    <main>
      <h1>Edit the main page</h1>
      <ColorPicker colorFor={'main-page'} />
      <div className='preview-colors'>
        <span style={{ background: bg1, color: textColor1 }}>
          Main text: {textColor1}
          <br />
          Main background: {bg1}
        </span>
        <span style={{ background: bg2, color: textColor2 }}>
          Text 2: {textColor2}
          <br />
          Background 2: {bg2}
        </span>
        <span style={{ background: bg3, color: textColor1 }}>
          Main text: {textColor1}
          <br />
          Background 3: {bg3}
        </span>
        <div className='btns'>
          <button style={{ background: btn1BG, color: btn1TextColor }}>
            Button 1 text: {btn1TextColor}
            <br /> background: {btn1BG}
          </button>
          <button style={{ background: btn2BG, color: btn2TextColor }}>
            Button 2 text: {btn2TextColor} <br /> background: {btn2BG}
          </button>
        </div>
        <div
          className='header-preview'
          style={{ color: headerTextColor, background: headerBg }}
        >
          header/footer text color: {headerTextColor}
          <br /> header/footer background color: {headerBg}
        </div>
      </div>
      <FontsForm />
      <button onClick={handleClickGeneralStyling}>Submit general styling</button>
    </main>
  );
}

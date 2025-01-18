import './form.css';
import { useSelector, useDispatch } from 'react-redux';
import ColorPicker from '../../components/ColorPicker/ColorPicker';
import FontsForm from './FontsForm';

export default function MainForm() {
  const bG1 = useSelector((state) => state.bG1.value);
  const bG2 = useSelector((state) => state.bG2.value);
  const bG3 = useSelector((state) => state.bG3.value);
  const textColor1 = useSelector((state) => state.textColor1.value);
  const textColor2 = useSelector((state) => state.textColor2.value);
  const btn1BG = useSelector((state) => state.btn1BG.value);
  const btn1Hover = useSelector((state) => state.btn1Hover.value);
  const btn1TextColor = useSelector((state) => state.btn1TextColor.value);
  const btn2BG = useSelector((state) => state.btn2BG.value);
  const btn2Hover = useSelector((state) => state.btn2Hover.value);
  const btn2TextColor = useSelector((state) => state.btn2TextColor.value);

  function handleClickGeneralStyling(e) {
    e.preventDefault();
  }
  return (
    <main>
      <h1>Edit the main page</h1>
      <ColorPicker colorFor={'main-page'} />
      <div className='preview-colors'>
        <span style={{ background: bG1, color: textColor1 }}>
          Main text: {textColor1}
          <br />
          Main background: {bG1}
        </span>
        <span style={{ background: bG2, color: textColor2 }}>
          Text 2: {textColor2}
          <br />
          Background 2: {bG2}
        </span>
        <span style={{ background: bG3, color: textColor1 }}>
          Main text: {textColor1}
          <br />
          Background 3: {bG3}
        </span>
        <div className='btns'>
          <button style={{ background: btn1BG, color: btn1TextColor }}>Button 1</button>
          <button style={{ background: btn2BG, color: btn2TextColor }}>Button 2</button>
        </div>
      </div>
      <FontsForm />
      <button onClick={handleClickGeneralStyling}>Submit general styling</button>
    </main>
  );
}

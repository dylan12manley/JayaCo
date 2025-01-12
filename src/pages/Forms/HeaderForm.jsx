import './form.css';
import ColorPicker from '../../components/ColorPicker/ColorPicker';
import { useSelector, useDispatch } from 'react-redux';

// Background color
// Text color
// (maybe not this)Border color + thickness
// Category page links
// About us
// Company logo / homepage link
// Social media link 1
// Social media link 2

export default function HeaderForm() {
  const headerBG = useSelector((state) => state.headerBG.value);
  const headerTextColor = useSelector((state) => state.headerTextColor.value);

  const categories = [];

  return (
    <main>
      <h1>Edit the header and footer</h1>
      <ColorPicker colorFor={'header'} />
      <div>
        <span style={{ background: headerBG, color: headerTextColor }}>Example of header text on background</span>
      </div>
      <form></form>
      {/* <form></form> */}
    </main>
  );
}

import './forms.css';
import HomeForm from './HomeForm';
import SignIn from './SignIn';
import SignUp from './SignUp';
import SignOut from './SignOut';
import ColorSelector from '../../features/colorSelector/ColorSelector';

export default function Forms() {
  return (
    <main id='forms'>
      <SignUp />
      <SignIn />
      <SignOut />
      <HomeForm />
      <ColorSelector />
    </main>
  );
}

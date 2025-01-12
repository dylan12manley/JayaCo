import './forms.css';
import HomeForm from './HomeForm';
import SignIn from './SignIn';
import SignUp from './SignUp';
import SignOut from './SignOut';

export default function Forms() {
  return (
    <main id='forms'>
      <SignUp />
      <SignIn />
      <SignOut />
      <HomeForm />
    </main>
  );
}

import './Login.css';
import { useState } from 'react';
import SignIn from './SignIn';
import SignOut from './SignOut';
import SignUp from './SignUp';

export default function Login() {
  const isSignedIn = false;
  const [showSignUp, setShowSignUp] = useState(true);
  const [signInUpText, setSignInUpText] = useState('I already have an account');

  const handleClickSignInUp = () => {
    if (showSignUp) {
      setShowSignUp(false);
      setSignInUpText('I would like to sign up');
      return;
    } else if (!showSignUp) {
      setShowSignUp(true);
      setSignInUpText('I already have an account');
    }
  };
  return (
    <main id='login-page'>
      {isSignedIn ? (
        <SignOut />
      ) : (
        <>
          <button onClick={handleClickSignInUp}>{signInUpText}</button>
          {showSignUp ? <SignUp /> : <SignIn />}
        </>
      )}
    </main>
  );
}

import { getAuth, signOut } from 'firebase/auth';
import './form.css';

export default function SignOut() {
  function handleClickSignOut() {
    console.log('sign out btn clicked');
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        alert('sign out successfull');
        // Sign-out successful.
      })
      .catch((error) => {
        alert('an error happened');
        console.log(error);
      });
  }

  return <button onClick={handleClickSignOut}>Sign Out</button>;
}

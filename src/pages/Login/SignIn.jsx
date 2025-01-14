import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import '../Forms/form.css';

export default function SignIn() {
  const auth = getAuth();

  function handleSubmitSignIn(e) {
    e.preventDefault();
    // console.log('sign in clicked:', e.target[1]?.value, auth);
    const password = e.target[1]?.value;
    const email = e.target[0]?.value;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        alert('user has signed in');
        // console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert('an error has occured:', errorMessage);
        // console.log('error code:', errorCode);
      });
  }
  return (
    <form onSubmit={handleSubmitSignIn}>
      <h2>Sign In</h2>
      <div className='form-input'>
        <label htmlFor='email'>Email:</label>
        <input
          type='text'
          id='email'
          name='email'
        ></input>
      </div>
      <div className='form-input'>
        <label htmlFor='password'>Password:</label>
        <input
          type='password'
          id='password'
          name='password'
        ></input>
      </div>
      <div className='form-input'>
        <button type='submit'>Send</button>
      </div>
    </form>
  );
}

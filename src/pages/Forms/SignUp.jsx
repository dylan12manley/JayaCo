import { getAuth, createUserWithEmailAndPassword, validatePassword } from 'firebase/auth';
import './form.css';

export default function SignUp() {
  function handleSubmitSignUp() {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        alert(user, ' has signed up successfully.');
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert('An error occured. ', errorMessage);
        console.log('error code:', errorCode);
        // ..
      });
    //     const status = await validatePassword(getAuth(), passwordFromUser);
    // if (!status.isValid) {
    //   // Password could not be validated. Use the status to show what
    //   // requirements are met and which are missing.

    //   // If a criterion is undefined, it is not required by policy. If the
    //   // criterion is defined but false, it is required but not fulfilled by
    //   // the given password. For example:
    //   const needsLowerCase = status.containsLowercaseLetter !== true;
    // }
  }
  return (
    <form>
      <h2>Sign Up</h2>
      <div className='form-input'>
        <label htmlFor='email'>Email:</label>
        <input
          type='text'
          id='email'
          name='email'
        ></input>
      </div>
      <p>password must be contain at least 6 charctors and one uppercase, lowercase, number and special charactor.</p>
      <div className='form-input'>
        <label htmlFor='password'>Password:</label>
        <input
          type='text'
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

import { useRef, useState } from "react";
import "./Login.css";

export default function Login() {
  const [emailInvalid, setEmailInvalid] = useState(false);
  const email = useRef();
  const password = useRef();

  function handleSubmit(event) {
    event.preventDefault();

    const enteredPassword = password.current.value;
    const enteredEmail = email.current.value;

    const emailIsValid =
      enteredEmail.includes("@") && enteredEmail.includes("gmail.com");

    if (!emailIsValid) {
      setEmailInvalid(true);
      return;
    }

    setEmailInvalid(false); 
  }

  

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" ref={email} />
          <div className="control-error">
            {emailInvalid && <p>Please enter a valid email address.</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" ref={password} />
        </div>
      </div>

      <p className="form-actions">
        <button className="button login-btn">Login</button>
        <button type="button" className="button button-flat">
          Reset
        </button>
      </p>
    </form>
  );
}

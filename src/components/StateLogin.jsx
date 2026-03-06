import { useState } from "react";
import "./Login.css";

export default function Login() {
  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });

  const [inputBlurred, setInputBlurred] = useState({
    email: false,
    password: false,
  });

  const emailInvalid = inputBlurred.email &&
    (!enteredValues.email.includes("@") ||
    !enteredValues.email.includes("gmail.com"));

  function handleSubmit(event) {
    event.preventDefault();

    console.log(enteredValues.email);
  }

  function handleInputChange(identifier, value) {
    setEnteredValues((prevValues) => ({
      ...prevValues,
      [identifier]: value,
    }));

    setInputBlurred((prevBlurred) => ({
      ...prevBlurred,
      [identifier]: false,
    }));
  }

  function handleInputBlur(identifier) {
    setInputBlurred((prevBlurred) => ({
      ...prevBlurred,
      [identifier]: true,
    }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onBlur={() => handleInputBlur("email")}
            onChange={(event) => handleInputChange("email", event.target.value)}
            value={enteredValues.email}
          />
          <div className="control-error">
            {emailInvalid && <p>Please enter a valid email address.</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={(event) =>
              handleInputChange("password", event.target.value)
            }
            value={enteredValues.password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button login-btn">Login</button>
        <button className="button button-flat">Reset</button>
      </p>
    </form>
  );
}

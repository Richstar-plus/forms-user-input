import { useState } from "react";
import "./Login.css";
import { Input } from "./Input.jsx";

export default function Login() {
  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });

  const [inputBlurred, setInputBlurred] = useState({
    email: false,
    password: false,
  });

  const emailInvalid =
    inputBlurred.email &&
    (!enteredValues.email.includes("@") ||
      !enteredValues.email.includes("gmail.com"));

  const passwordInvalid =
    inputBlurred.password && enteredValues.password.trim().length < 6;

  function handleSubmit(event) {
    event.preventDefault();

    console.log('Email: ', enteredValues.email);
    console.log('Password: ', enteredValues.password);
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
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          onBlur={() => handleInputBlur("email")}
          onChange={(event) => handleInputChange("email", event.target.value)}
          value={enteredValues.email}
          error={
            emailInvalid ? "Please enter a valid email address." : undefined
          }
        />

        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onBlur={() => handleInputBlur("password")}
          onChange={(event) =>
            handleInputChange("password", event.target.value)
          }
          value={enteredValues.password}
          error={
            passwordInvalid ? "Password must be at least 6 characters long." : undefined
          }
        />
      </div>

      <p className="form-actions">
        <button className="button login-btn">Login</button>
        <button type="reset" className="button button-flat">Reset</button>
      </p>
    </form>
  );
}

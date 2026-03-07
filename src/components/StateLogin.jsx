import "./Login.css";
import { Input } from "./Input.jsx";
import { useInput } from "../hooks/useInput.jsx";
import { isEmail, hasMinLength, isNotEmpty } from "../util/validation.js";


export default function Login() {
  const {
    value: email,
    onChange: handleEmailChange,
    onBlur: handleEmailBlur,
    hasError: emailHasError,
  } = useInput("", (value) =>  isEmail(value) && value.includes("gmail.com") && isNotEmpty(value));


  const {
    value: password,
    onChange: handlePasswordChange,
    onBlur: handlePasswordBlur,
    hasError: passwordHasError,
  } = useInput("", (value) => hasMinLength(value, 6));

  function handleSubmit(event) {
    event.preventDefault();

    if(emailHasError || passwordHasError) {
      return;
    }

    console.log("Email: ", email);
    console.log("Password: ", password);
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
          onBlur={handleEmailBlur}
          onChange={handleEmailChange}
          value={email}
          error={
            emailHasError ? "Please enter a valid email address." : undefined
          }
        />

        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onBlur={handlePasswordBlur}
          onChange={handlePasswordChange}
          value={password}
          error={
            passwordHasError
              ? "Password must be at least 6 characters long."
              : undefined
          }
        />
      </div>

      <p className="form-actions">
        <button className="button login-btn">Login</button>
        <button type="reset" className="button button-flat">
          Reset
        </button>
      </p>
    </form>
  );
}

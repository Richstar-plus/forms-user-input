import { useState } from "react";

export function useInput(defaultValue, validateFn) {
  const [enteredValue, setEnteredValue] = useState(defaultValue);

  const [inputBlurred, setInputBlurred] = useState(false);

  const valueIsValid = validateFn ? validateFn(enteredValue) : enteredValue.trim() !== "";

  function handleInputChange(event) {
    setEnteredValue(event.target.value);

    setInputBlurred(false);
  }

  function handleInputBlur() {
    setInputBlurred(true);
  }

  return {
    value: enteredValue,
    onChange: handleInputChange,
    onBlur: handleInputBlur,
    hasError: inputBlurred && !valueIsValid,
  };
}

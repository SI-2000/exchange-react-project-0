import { useState } from "react";

export default function useInput(valueValidator) {
  const [enterdValue, setEnterdValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = valueValidator(enterdValue);
  const inputHasError = !valueIsValid && isTouched;

  const valueChangeHandler = (event) => {
    setEnterdValue(event.target.value);
  };

  const inputBlueHnadler = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnterdValue("");
    setIsTouched(false);
  };

  return {
    value: enterdValue,
    isValid: valueIsValid,
    hasError: inputHasError,
    valueChangeHandler,
    inputBlueHnadler,
    reset,
  };
}

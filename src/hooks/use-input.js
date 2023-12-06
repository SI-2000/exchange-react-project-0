import { useState } from "react";

export default function useInput({
  valueValidator,
  valueModifier = (val) => {
    /* If it is needed to change the input value 
    (such as converting Persian numbers to English in numerical inputs) */
    return val;
  },
  initialInputValue = "",

  /* If the input value is managed by external state management,
  these two lines are used */
  isUsingInternalState = true,
  externalState: { extValue, extValueUpdateFn },
}) {
  const [enteredValue, setEnteredValue] = useState(initialInputValue);
  const [isTouched, setIsTouched] = useState(false);

  const inputValue = isUsingInternalState ? enteredValue : extValue;
  const inputValueUpdater = isUsingInternalState
    ? setEnteredValue
    : extValueUpdateFn;

  const modifiedValue = valueModifier(inputValue);
  const valueIsValid = valueValidator(modifiedValue).isValid;
  if (!valueIsValid && isTouched) {
    console.log(valueValidator(modifiedValue).errorMessage);
  }
  const errorMessage =
    !valueIsValid && isTouched
      ? valueValidator(modifiedValue).errorMessage
      : "";

  const inputHasError = !valueIsValid && isTouched;

  const valueChangeHandler = (event) => {
    const modifiedValue = valueModifier(event.target.value);
    const newValueIsValid = valueValidator(modifiedValue).isValid;
    if (newValueIsValid) {
      inputValueUpdater(modifiedValue);
    } else if (modifiedValue === "") {
      inputValueUpdater(modifiedValue);
    }
  };

  const inputblurHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
    inputValueUpdater("");
    setIsTouched(false);
  };

  return {
    value: inputValue,
    isValid: valueIsValid,
    hasError: inputHasError,
    errorMessage,
    valueChangeHandler,
    inputblurHandler,
    isTouched,
    reset,
  };
}

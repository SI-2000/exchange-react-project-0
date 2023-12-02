import { useEffect, useState } from "react";
import persianNumsToEnglish from "../util/persianNums-to-english";
import { useDispatch } from "react-redux";

export default function useInput(
  valueValidators,
  inputName,
  //  initialInputValue = ""
  enteredValue,
  setEnteredValue
) {
  // const [enteredValue, setEnteredValue] = useState(initialInputValue);
  const [isTouched, setIsTouched] = useState(false);

  let errorMessage = "";

  const valueIsValid = valueValidators.every((validator) => {
    const enteredValueValidation = validator(
      persianNumsToEnglish(enteredValue)
    );
    const enteredValueIsValid = enteredValueValidation.isValid;
    if (!enteredValueIsValid && isTouched) {
      errorMessage = enteredValueValidation.errorMessage;
    }
    return enteredValueIsValid;
  });

  const inputHasError = !valueIsValid && isTouched;

  const valueChangeHandler = (event) => {
    const transformedValue = persianNumsToEnglish(event.target.value);
    const newValueIsValid = valueValidators.every((validator) => {
      return validator(transformedValue).isValid;
    });
    if (newValueIsValid) {
      setEnteredValue(transformedValue, inputName);
    } else if (transformedValue === "") {
      setEnteredValue(transformedValue, inputName);
    }
  };

  const inputblurHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue("", inputName);
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError: inputHasError,
    errorMessage,
    valueChangeHandler,
    inputblurHandler,
    isTouched,
    reset,
  };
}

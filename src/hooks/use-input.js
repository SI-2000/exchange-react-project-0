import { useEffect, useState } from "react";
import persianNumsToEnglish from "../util/persianNums-to-english";

export default function useInput(valueValidators) {
  const [enterdValue, setEnterdValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  let errorMessage = "";

  const valueIsValid = valueValidators.every((validator) => {
    const enterdValueValidation = validator(persianNumsToEnglish(enterdValue));
    const enterdValueIsValid = enterdValueValidation.isValid;
    if (!enterdValueIsValid && isTouched) {
      errorMessage = enterdValueValidation.errorMessage
    }
    return enterdValueIsValid;
  });

  const inputHasError = !valueIsValid && isTouched;


  const valueChangeHandler = (event) => {
    const transformedValue = persianNumsToEnglish(event.target.value);
    const newValueIsValid = valueValidators.every((validator) => {
      return validator(transformedValue).isValid;
    });
    if (newValueIsValid) {
      setEnterdValue(transformedValue);
    } else if (transformedValue === "") {
      setEnterdValue(transformedValue);
    }
  };

  const inputblurHandler = () => {
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
    errorMessage,
    valueChangeHandler,
    inputblurHandler,
    reset,
  };
}

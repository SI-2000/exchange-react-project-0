import { useState } from "react";
import persianNumsToEnglish from "../util/persianNums-to-english";

export default function useInput(valueValidators) {
  const [enterdValue, setEnterdValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const errorMessages = [];
  

  const valueIsValid = valueValidators.every((validator) => {
    const enterdValueValidation = validator(
      persianNumsToEnglish(enterdValue)
    ).isValid;
    return enterdValueValidation;
  });


  const inputHasError = !valueIsValid && isTouched;


  const valueChangeHandler = (event) => {
    const transformedValue = persianNumsToEnglish(event.target.value);
    const newValueIsValid = valueValidators.every((validator) => {
      const newValueValidation = validator(transformedValue);
      if (!newValueValidation.isValid) {
        errorMessages.push(newValueValidation.errorMessage);
      }
      return validator(transformedValue).isValid;
    });
    if (newValueIsValid) {
      setEnterdValue(transformedValue);
    } else if (transformedValue === "") {
      setEnterdValue(transformedValue);
    }
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
    errorMessages,
    valueChangeHandler,
    inputBlueHnadler,
    reset,
  };
}

import { useState } from "react";
import persianNumsToEnglish from "../util/persianNums-to-english";

export default function useInput(valueValidator) {
  const [enterdValue, setEnterdValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = valueValidator(persianNumsToEnglish(enterdValue));
  const inputHasError = !valueIsValid && isTouched;

  const valueChangeHandler = (event) => {
    const transformedValue = persianNumsToEnglish(event.target.value);

    if (valueValidator(transformedValue)) {
      setEnterdValue(transformedValue);
    } else if (!valueValidator(transformedValue) && transformedValue === "") {
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
    valueChangeHandler,
    inputBlueHnadler,
    reset,
  };
}

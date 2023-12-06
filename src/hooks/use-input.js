import { useEffect, useState } from "react";
import persianNumsToEnglish from "../util/persianNums-to-english";
import { useDispatch } from "react-redux";

export default function useInput({
  valueValidators,
  initialInputValue = "",
  useInternalValueState = true,
  externalState: { value, valueUpdateFn },
}) {

  const [enteredValue, setEnteredValue] = useState(initialInputValue);
  const [isTouched, setIsTouched] = useState(false);

  const inputValue = useInternalValueState ? enteredValue :value;
  const inputValueUpdater = useInternalValueState
    ? setEnteredValue
    :valueUpdateFn;

  let errorMessage = "";

  const valueIsValid = valueValidators.every((validator) => {
    const enteredValueValidation = validator(persianNumsToEnglish(inputValue));
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
      inputValueUpdater(transformedValue);
    } else if (transformedValue === "") {
      inputValueUpdater(transformedValue);
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

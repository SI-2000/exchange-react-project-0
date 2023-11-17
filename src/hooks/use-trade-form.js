export function useTradeForm(inputsData, formType, order_type) {
  let formIsValid = false;

  const { stop, price, amount } = inputsData[formType];
  switch (order_type) {
    case "LIMIT":
      formIsValid = price.isValid && amount.isValid;
      break;
    case "MARKET":
      formIsValid = amount.isValid;
      break;
    case "STOP_LIMIT":
      formIsValid = stop.isValid && price.isValid && amount.isValid;
      break;
  }

  return { formIsValid };
}

export function useTradeForm(inputsData, formType, order_type) {
  const { stop, price, amount } = inputsData[formType];
  let formisValid;
  // console.log(formisValid);
  console.log(order_type)

  switch (order_type) {
    case "Limit":
      console.log("1")
      formisValid = price.isValid && amount.isValid;
      break;
    case "Market":
      console.log("2")

      formisValid = amount.isValid;
      break;
    case "Stop-limit":
      console.log("3")

      formisValid = stop.isValid && price.isValid && amount.isValid;
      break;
  }
  return { formisValid };
}

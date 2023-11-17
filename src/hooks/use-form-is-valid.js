export function useFormIsValid(inputsData, formType, order_type) {
//   console.log(order_type.state);
//   switch (order_type){
//     case "Limit"
// }
  const formIsValid = Object.values(inputsData[formType]).every((input) => {
    return input.isValid;
  });
  return formIsValid;
}

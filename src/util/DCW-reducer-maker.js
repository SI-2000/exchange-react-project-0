//Dynamic content window reducer maker

export function DCWreduverMaker(actionTypes) {
  const reducer = (state, action) => {
    let baseState = { componentsClass: {}, buttonsClass: {} };
    actionTypes.forEach((actionType) => {
      baseState.componentsClass[actionType] = "hidden";
      baseState.buttonsClass[actionType] = undefined;
    });
    let initialState = baseState;


    initialState.componentsClass[action.type] = undefined;
    initialState.buttonsClass[action.type] = "active";

    return initialState;
  };

  return reducer;
}

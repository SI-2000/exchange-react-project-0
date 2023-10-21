import { useReducer } from "react";

export function DCWreduverMaker(actionTypes) {
  // Dynamic Content Window reducer maker

  // Creates a reducer function for use in
  // the DynamicContentWindow component

  const reducer = (state, action) => {
    let baseState = {state:"",  componentsClass: {}, buttonsClass: {} };
    actionTypes.forEach((actionType) => {
      baseState.componentsClass[actionType] = "hidden";
      baseState.buttonsClass[actionType] = undefined;
    });
    let initialState = baseState;

    initialState.state = action.type
    initialState.componentsClass[action.type] = undefined;
    initialState.buttonsClass[action.type] = "active";

    return initialState;
  };

  return reducer;
}

function initialStateMaker(actions) {
  let state = { componentsClass: {}, buttonsClass: {} };
  actions.forEach((actionType) => {
    state.componentsClass[actionType] = "hidden";
    state.buttonsClass[actionType] = undefined;
  });

  state.componentsClass[actions[0]] = undefined;
  state.buttonsClass[actions[0]] = "active";
  return state;
}

export function useReducer_DWindow(actions) {
  const actionKeys = [];
  actions.forEach((action) => {
    actionKeys.push(Object.keys(action)[0]);
  });
  const dataDisplayReducer = DCWreduverMaker(actionKeys);
  const initialState = initialStateMaker(actionKeys);
  const useReducerList = useReducer(dataDisplayReducer, initialState);

  return useReducerList;
}

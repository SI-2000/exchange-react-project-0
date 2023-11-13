import { useReducer } from "react";

const initial_state = {
  sell: {
    price: "",
    amount: "",
  },
  buy: {
    price: "",
    amount: "",
  },
};

const TradeFormContext = React.createContext({initial_state, });

const TradeFormCtxProvider = ({ children }) => {
  const [inputsValues, dispatchInputsValues] = useReducer(tradeFormReducer, initial_state);

  return <TradeFormContext.Provider></TradeFormContext.Provider>;
};

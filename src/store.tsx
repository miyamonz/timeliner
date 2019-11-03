import React, { useReducer, useContext } from "react";

const initialState = {
  time: 0,
  height: 10
};
const Store = React.createContext();

//ここにreducer
const reducer = (state = {}, action) => {
  if (typeof action === "function") {
    return { ...state, ...action(state) };
  }
  // ここらへんにif(action.type === 'ADD_TODO')とかしてstate返せばいいわけだが、実は全部functionでええんちゃう？
  return state;
};

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <Store.Provider value={[state, dispatch]}>{children}</Store.Provider>;
};

export { Store, Provider };
export default () => useContext(Store);

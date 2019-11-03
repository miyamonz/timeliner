import React, { useReducer, useContext } from "react";

const initialState = {
  time: 0,
  play: true,
  height: 10,
  viewbox: {
    x: 0,
    y: 0,
    width: 100,
    height: 10
  }
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

export const state = initialState;
const Provider = ({ children }) => {
  const [_state, dispatch] = useReducer(reducer, initialState);
  state = _state;
  return <Store.Provider value={[state, dispatch]}>{children}</Store.Provider>;
};

export { Store, Provider };
export default () => useContext(Store);

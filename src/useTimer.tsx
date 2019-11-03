import React, { useState, useEffect, useContext } from "react";
import { state } from "./store";

let curr = 0;
let prev = 0;

const Context = React.createContext();
export function TimerProvider({ children }) {
  const [, updateState] = useState();
  const forceUpdate = () => updateState({});
  function tick(time) {
    const diff = time - prev;
    if (state.play) {
      curr += diff;
      forceUpdate();
    }

    prev = time;
    requestAnimationFrame(tick);
  }
  useEffect(() => {
    let req = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(req);
  }, []);
  return (
    <Context.Provider
      value={[curr / 1000, t => ((curr = t * 1000), forceUpdate())]}
    >
      {children}
    </Context.Provider>
  );
}
export default function useTimer() {
  return useContext(Context);
}

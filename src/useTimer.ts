import React, { useState, useEffect, useRef } from "react";
import { state } from "./store";

export default function useTimer() {
  const [time, setTime] = useState(0);

  const timeRef = useRef();
  const prevRef = useRef(0);

  let prev = new Date();
  function tick(time) {
    const diff = time - prevRef.current;
    if (state.play) {
      setTime(prev => prev + diff);
    }

    prevRef.current = time;
    timeRef.current = requestAnimationFrame(tick);
  }
  useEffect(() => {
    let r = requestAnimationFrame(tick);
    timeRef.current = r;
    return () => cancelAnimationFrame(r);
  }, []);
  return [time / 1000, t => setTime(t * 1000)];
}

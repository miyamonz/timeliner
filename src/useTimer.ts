import React, { useState, useEffect, useRef } from "react";

export default function useTimer() {
  const [time, setTime] = useState(0);
  let prev = new Date();
  function tick() {
    let now = new Date();
    const diff = now - prev;
    prev = now;
    setTime(prev => prev + diff);

    return requestAnimationFrame(tick);
  }
  useEffect(() => {
    let r = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(r);
  }, []);
  return [time / 1000, t => setTime(t * 1000)];
}

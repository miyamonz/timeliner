import React, { useState, useEffect, useRef } from "react";
import useStore from "./store";
import useTimer from "./useTimer";
import CueAdder from "./CueAdder";
import Cue from "./Cue";

export default function App() {
  const ref = useRef();
  const [time, setTime] = useTimer();
  const [{ height }] = useStore();
  const [events, setEvents] = useState([]);
  return (
    <>
      {time}
      <svg width={"100vw"} ref={ref}>
        <CueAdder
          svg={ref.current}
          onAdd={n => setEvents(prev => [...prev, n])}
        />
        <rect x={time} y={0} width={"1"} height={height * 100} />
        {events.map(n => (
          <Cue key={n} time={n} />
        ))}
      </svg>
      <button onClick={() => setTime(0)}>reset</button>
    </>
  );
}

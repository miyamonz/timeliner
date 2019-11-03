import React, { useState, useEffect, useRef } from "react";
import useStore from "./store";
import useTimer from "./useTimer";
import CueAdder from "./components/CueAdder";
import Cue from "./components/Cue";
import { LineV } from "./components/ScreenComponents";

export default function App() {
  const ref = useRef();
  const [time, setTime] = useTimer();
  const [{ height, viewbox, play }, dispatch] = useStore();
  const [events, setEvents] = useState([]);
  return (
    <>
      <button
        onClick={() =>
          dispatch(() => ({
            play: !play
          }))
        }
      >
        {play ? "stop" : "play"}
      </button>
      {time}

      <svg
        width={"100vw"}
        height={500}
        ref={ref}
        viewBox={`${viewbox.x} ${viewbox.y} ${viewbox.width} ${viewbox.height}`}
      >
        <CueAdder
          svg={ref.current}
          onAdd={n => setEvents(prev => [...prev, n])}
        />
        {events.map(n => (
          <Cue
            key={n}
            time={n}
            onClick={() => setEvents(prev => prev.filter(t => t !== n))}
          />
        ))}
        <LineV x={time} />
      </svg>
      <button onClick={() => setTime(0)}>reset</button>
    </>
  );
}

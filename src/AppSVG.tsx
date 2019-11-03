import React, { useState, useEffect, useRef, useContext } from "react";
import useStore from "./store";
import useTimer from "./useTimer";

import CueAdder from "./components/CueAdder";
import Cue from "./components/Cue";
import { LineV } from "./components/ScreenComponents";

const SVGContext = React.createContext();
export function useSVG() {
  return useContext(SVGContext);
}
export default function AppSVG() {
  const [time] = useTimer();
  const ref = useRef();
  const [{ height, viewbox }] = useStore();
  return (
    <svg
      width={"100vw"}
      height={500}
      ref={ref}
      viewBox={`${viewbox.x} ${viewbox.y} ${viewbox.width} ${viewbox.height}`}
    >
      <SVGContext.Provider value={ref.current}>
        <Events />
        <LineV x={time} />
      </SVGContext.Provider>
    </svg>
  );
}

function Events() {
  const [events, setEvents] = useState([]);
  const svg = useSVG();

  return (
    <>
      <CueAdder svg={svg} onAdd={n => setEvents(prev => [...prev, n])} />

      {events.map(n => (
        <Cue
          key={n}
          time={n}
          onClick={() => setEvents(prev => prev.filter(t => t !== n))}
        />
      ))}
    </>
  );
}

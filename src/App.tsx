import React, { useState, useEffect, useRef, useContext } from "react";
import useStore from "./store";
import useTimer from "./useTimer";
import AppSVG, { useSVG } from "./AppSVG";

export default function App() {
  const [{ play }, dispatch] = useStore();
  const [time, setTime] = useTimer();
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
      <AppSVG />

      <button onClick={() => setTime(0)}>reset</button>
    </>
  );
}

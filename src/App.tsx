import React, { useState, useEffect, useRef } from "react";

function useTimer() {
  const [time, setTime] = useState(0);
  let prev = new Date();
  function tick() {
    let now = new Date();
    const diff = now - prev;
    prev = now;
    setTime(prev => prev + diff / 1000);

    return requestAnimationFrame(tick);
  }
  useEffect(() => {
    let r = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(r);
  }, []);
  return [time, setTime];
}

const height = 10;

function Insert({ svg, onAdd }) {
  const [cur, setCur] = useState(null);
  return (
    <>
      {cur && <rect x={cur} y={0} width={0.1} height={height * 100} />}
      <rect
        x={0}
        y={0}
        width={"100%"}
        height={"100%"}
        fill="transparent"
        stroke="yellow"
        onPointerMove={e => {
          const pt = svg.createSVGPoint();
          pt.x = e.clientX;
          pt.y = e.clientY;
          const p = pt.matrixTransform(e.target.getScreenCTM().inverse());
          setCur(p.x);
        }}
        onPointerDown={e => {
          console.log(cur);
          onAdd(cur);
        }}
      />
    </>
  );
}
export default function App() {
  const ref = useRef();
  const [time, setTime] = useTimer();
  const [events, setEvents] = useState([]);
  return (
    <>
      {time}
      <svg width={"100vw"} ref={ref} viewBox={"0 0 100 100"}>
        <Insert
          svg={ref.current}
          onAdd={n => setEvents(prev => [...prev, n])}
        />
        <rect x={time} y={0} width={"1"} height={height * 100} />
        {events.map(n => (
          <rect x={n} y={0} width={"0.1"} height={height * 100} fill="red" />
        ))}
      </svg>
      <button onClick={() => setTime(0)}>reset</button>
    </>
  );
}

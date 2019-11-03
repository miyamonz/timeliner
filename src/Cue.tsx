import React, { useState, useEffect } from "react";
import useStore from "./store";

export default function Cue({ time, onClick }) {
  const [{ height }] = useStore();

  const w = 1;
  const offset = 4;
  return (
    <>
      <text x={time} y={40}>
        {time}
      </text>

      <rect
        x={time - offset}
        y={0}
        width={w + 2 * offset}
        height={height * 100}
        fill="lightgray"
        onContextMenu={e => {
          e.preventDefault();
          return false;
        }}
      />
      <rect x={time} y={0} width={w} height={height * 100} fill="red" />
      {/* focus event でなんかしてstoreになげたりする */}
      <foreignObject x={time} y={40} width={100} height={20}>
        <input />
      </foreignObject>
      <Batsu x={time} y={10} onClick={onClick} />
    </>
  );
}
function Batsu({ x, y, onClick }) {
  const r = 10;
  const mr = 5;
  return (
    <>
      <circle cx={x} cy={y} r={r} fill="red" />
      <line x1={x - mr} y1={y + mr} x2={x + mr} y2={y - mr} stroke="black" />
      <line x1={x + mr} y1={y + mr} x2={x - mr} y2={y - mr} stroke="black" />

      <circle cx={x} cy={y} r={r} fill="transparent" onClick={onClick} />
    </>
  );
}

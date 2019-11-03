import React, { useState, useEffect } from "react";
import useStore from "./store";
import { LineV } from "./ScreenComponents";

export default function Cue({ time, onClick }) {
  const [{ height }] = useStore();

  const w = 0.1;
  const offset = 0.4;
  return (
    <>
      <text x={time} y={1} fontSize={1}>
        {time}
      </text>

      <LineV x={time} strokeWidth={w + 2 * offset} stroke="lightgray" />
      <LineV x={time} strokeWidth={w} stroke="red" />
      {/* focus event でなんかしてstoreになげたりする */}
      <foreignObject x={time} y={40} width={100} height={20}>
        <input />
      </foreignObject>
      <Batsu x={time} y={0.5} onClick={onClick} />
    </>
  );
}
function Batsu({ x, y, onClick }) {
  const r = 0.9;
  const mr = r / 2;

  const props = {
    stroke: "black",
    strokeWidth: 0.2
  };
  return (
    <>
      <circle cx={x} cy={y} r={r} fill="red" />
      <line x1={x - mr} y1={y + mr} x2={x + mr} y2={y - mr} {...props} />
      <line x1={x + mr} y1={y + mr} x2={x - mr} y2={y - mr} {...props} />

      <circle cx={x} cy={y} r={r} fill="transparent" onClick={onClick} />
    </>
  );
}

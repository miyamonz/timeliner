import React, { useState, useEffect, useRef } from "react";
import useStore from "./store";

export default function CueAdder({ svg, onAdd }) {
  const [cur, setCur] = useState(null);
  const [{ height }] = useStore();
  return (
    <>
      <text x={cur} y={20}>
        {cur}
      </text>
      {cur && <rect x={cur} y={0} width={1} height={height * 100} />}
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
          onAdd(cur);
        }}
      />
    </>
  );
}

import React, { useState, useEffect, useRef } from "react";
import useStore from "./store";
import { LineV } from "./ScreenComponents";

export default function CueAdder({ svg, onAdd }) {
  const [cur, setCur] = useState(null);
  const [{ height }] = useStore();
  return (
    <>
      <text x={cur} y={20}>
        {cur}
      </text>
      {cur && <LineV x={cur} />}
      <rect
        x={0}
        y={0}
        width={"100%"}
        height={height}
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

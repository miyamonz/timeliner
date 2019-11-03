import React, { useState, useEffect, useRef } from "react";
import useStore from "./store";

export default function Cue({ time }) {
  const [{ height }] = useStore();

  const w = 1;
  const offset = 4;
  return (
    <>
      <text x={time} y={20}>
        {time}
      </text>

      <rect
        x={time - offset}
        y={0}
        width={w + 2 * offset}
        height={height * 100}
        fill="lightgray"
      />
      <rect x={time} y={0} width={w} height={height * 100} fill="red" />
    </>
  );
}

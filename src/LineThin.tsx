import React, { useState, useEffect, useRef } from "react";
import useStore from "./store";

export default function LineThin(props) {
  const [{ viewbox }] = useStore();
  return <line stroke="black" strokeWidth={0.1} {...props} />;
}

export function LineV(props) {
  const [{ viewbox, height }] = useStore();
  const { x } = props;
  return <LineThin {...props} x1={x} x2={x} y1={0} y2={height} />;
}
export function LineH(props) {
  const [{ viewbox, height }] = useStore();
  const { x } = props;
  return <LineThin {...props} y1={x} y2={x} x1={0} x2={viewbox.width} />;
}

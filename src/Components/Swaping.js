//import React from "react";
import { useState } from "react";

const SwapComponent = () => {
  const [a, setA] = useState(10); // init a
  const [b, setB] = useState(50); // init b

  const onClick = () => {
    const aTemp = a;
    const bTemp = b;
    setA(bTemp); // swap a
    setB(aTemp); // swap b
  };
  const style = {
    backgroundColor: "skyblue",
    color: "white",
    height: "3rem",
    textAlign: "center"
  };
  const style1 = {
    backgroundColor: "crimson",
    color: "white",
    height: "3rem",
    textAlign: "center"
  };
  const btn = {
    backgroundColor: "purple",
    color: "white",
    height: "3rem",
    width: "10rem",
    borderRadius: "0.5rem",
    fontWeight: "14px"
  };

  return (
    <>
      <h3 style={style}>A :- {a} </h3>
      <h3 style={style1}>B :- {b} </h3>

      <button onClick={onClick} style={btn}>
        Swap
      </button>
    </>
  );
};
export default SwapComponent;

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

  return (
    <>
      <h3>A :- {a} </h3>
      <h3>B :- {b} </h3>

      <button onClick={onClick}>Swap</button>
    </>
  );
};
export default SwapComponent;

import React, { useState } from "react";
import { useCounter } from "../hooks/useCounter";

function Counter() {
  const { count, increment, decrement } = useCounter();
  return (
    <div>
      <p data-testid="counter-value">{count}</p>
      <button onClick={increment}>Increment</button>
      <p></p>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;

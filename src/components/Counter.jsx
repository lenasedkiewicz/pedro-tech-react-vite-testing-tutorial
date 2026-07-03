import React, { useState } from "react";
import { useCounter } from "../hooks/useCounter";

function Counter() {
  //const { count, increment } = useCounter();
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
    </div>
  );
}

export default Counter;

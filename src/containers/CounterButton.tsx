import React, { useState } from "react";

const CounterButton = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button id="counter" onClick={() => setCount(count + 1)}>
        start counting
      </button>
      <div id="show-count">{count}</div>
    </div>
  );
};

export default CounterButton;

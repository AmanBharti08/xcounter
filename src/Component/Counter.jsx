import React from "react";

const Counter = () => {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <h1>Counter App</h1>
      <p className="displa">Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

export default Counter;

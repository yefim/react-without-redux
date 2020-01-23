import React, { useState } from 'react';

const CounterHooks = () => {
  const [ counter, setCounter ] = useState(0);
  return (
    <div>
      <span>{counter}</span>
      <button onClick={() => setCounter(counter + 1)}>+1</button>
    </div>
  );
};

export default CounterHooks;

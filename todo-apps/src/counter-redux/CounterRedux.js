import React from 'react';

const CounterRedux = (props) => (
  <div>
    <span>{props.counter}</span>
    <button onClick={props.onPlusOne}>+1</button>
  </div>
);

export default CounterRedux;

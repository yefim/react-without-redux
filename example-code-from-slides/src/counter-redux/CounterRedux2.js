import React from 'react';

const CounterRedux2 = (props) => (
  <div>
    <span>{props.counter}</span>
    <button onClick={props.onPlusOne}>+1</button>
  </div>
);

export default CounterRedux2;

import React from 'react';

import { Provider, connect } from 'react-redux'
import { createStore } from 'redux'

const reducer = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case '+1':
      return { counter: state.counter + 1 };
    default:
      return state;
  }
}

const store = createStore(reducer);

const CounterRedux = (props) => (
  <div>
    <span>{props.counter}</span>
    <button onClick={() => props.dispatch({ type: '+1' })}>+1</button>
  </div>
);

const ConnectedCounterRedux = connect((state) => state)(CounterRedux);

export default () => (
  <Provider store={store}><ConnectedCounterRedux /></Provider>
);

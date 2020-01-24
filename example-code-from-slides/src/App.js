import React from 'react';
import './App.css';

import CounterClass from './CounterClass';
import CounterHooks from './CounterHooks';
import CounterRedux from './CounterRedux';
import CounterRedux2 from './counter-redux/index';

import TodoClass from './TodoClass';
import TodoHooks from './TodoHooks';
import TodoRedux from './TodoRedux';
import TodoRedux2 from './todo-redux/index';

function App() {
  return (
    <div className="App">
      <CounterClass />
      <CounterHooks />
      <CounterRedux />
      <CounterRedux2 />

      <TodoClass />
      <TodoHooks />
      <TodoRedux />
      <TodoRedux2 />
    </div>
  );
}

export default App;

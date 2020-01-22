import React from 'react';
import logo from './logo.svg';
import './App.css';

import TodoHooks from './TodoHooks';
import TodoRedux from './TodoRedux';
import TodoClass from './TodoClass';
import TodoRedux2 from './redux/index';

function App() {
  return (
    <div className="App">
      <TodoHooks />
      <TodoRedux />
      <TodoClass />
      <TodoRedux2 />
    </div>
  );
}

export default App;

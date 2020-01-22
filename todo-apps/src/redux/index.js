import React from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import reducer from './reducer';
import ConnectedTodoRedux from './ConnectedTodoRedux';

const store = createStore(reducer);

export default () => (
  <Provider store={store}>
    <ConnectedTodoRedux />
  </Provider>
)

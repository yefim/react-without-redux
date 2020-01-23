import React from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import reducer from './reducer';
import ConnectedCounterRedux from './ConnectedCounterRedux';

const store = createStore(reducer);

export default () => (
  <Provider store={store}>
    <ConnectedCounterRedux />
  </Provider>
)

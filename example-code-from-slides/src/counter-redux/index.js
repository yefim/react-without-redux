import React from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import reducer from './reducer';
import ConnectedCounterRedux2 from './ConnectedCounterRedux2';

const store = createStore(reducer);

export default () => (
  <Provider store={store}>
    <ConnectedCounterRedux2 />
  </Provider>
)

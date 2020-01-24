import React from 'react';

import ProductList from './ProductList';
import Cart from './Cart';

const App = () => (
  <div>
    <h1>Amazon 2.0</h1>
    <div className="main">
      <ProductList />
      <Cart />
    </div>
  </div>
);

export default App;

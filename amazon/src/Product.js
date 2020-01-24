import React from 'react';

export default ({name, price}) => (
  <div className="product">
    <p className="price">${price}.00</p>
    <p>name: {name}</p>
  </div>
);

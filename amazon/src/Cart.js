import React from 'react';
import { connect } from 'react-redux';

import Product from './Product';

const Cart = (props) => {
  return (
    <div className="cart">
      <h1>cart</h1>
      <div className="items">
        {
          props.items.map((item) => (
            <div key={item.id}>
              <Product {...item} />
              <p>Quantity: {item.quantity}</p>
            </div>
          ))
        }
        <button onClick={() => console.log('bought!')}>Buy for ${props.price}</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    items: state.items,
    price: state.price,
  };
};

export default connect(mapStateToProps)(Cart);

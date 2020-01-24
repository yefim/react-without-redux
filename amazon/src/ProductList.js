import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Product from './Product';
import AddToCart from './AddToCart';
import { addToCart } from './actions';

const ProductList = (props) => {
  return (
    <div className="product-list">
      <h1>product list</h1>
      <div className="products">
        {
          props.products.map((product) => {
            return (
              <div key={product.id}>
                <Product {...product} />
                <AddToCart onSubmit={(quantity) => props.addToCart(product, quantity)} />
              </div>
            );
          })
        }
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.products,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  addToCart,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);

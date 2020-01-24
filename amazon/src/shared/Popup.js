import React from 'react';

class Popup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quantity: 1,
    };
  }

  addOne() {
    this.setState({ quantity: this.state.quantity + 1 });
  }

  render() {
    return (
      <div>
        <div>
          <span>{this.state.quantity}</span>
          <button onClick={() => this.addOne()}>+</button>
        </div>
        <button onClick={() => this.props.onClick(this.state.quantity)}>Add to Cart</button>
      </div>
    );
  }
}

export default Popup;

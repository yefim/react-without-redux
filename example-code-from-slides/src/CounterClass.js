import React from 'react';

class CounterClass extends React.Component {
  constructor() {
    super();
    this.state = {counter: 0};
  }
  render() {
    const { counter } = this.state;
    return (
      <div>
        <span>{counter}</span>
        <button onClick={() => this.setState({counter: counter + 1})}>+1</button>
      </div>
    );
  }
}

export default CounterClass;

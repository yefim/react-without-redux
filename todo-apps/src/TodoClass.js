import React from 'react';

class TodoClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      input: '',
    };
  }

  addTodo(e) {
    e.preventDefault();

    this.setState({
      todos: [this.state.input, ...this.state.todos],
      input: '',
    });
  }

  render() {
    return (
      <>
        <form onSubmit={(e) => this.addTodo(e)}>
          <label>Todo:
            <input
              type="text"
              value={this.state.input}
              onChange={(e) => this.setState({input: e.target.value})}
            />
          </label>
          <button type="submit">Add</button>
        </form>
        <ul>
          {this.state.todos.map((todo, i) => (
            <li key={`class-${i}`}>{todo}</li>
          ))}
        </ul>
      </>
    );
  }
}

export default TodoClass;

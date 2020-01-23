import React from 'react';

class TodoRedux extends React.Component {
  addTodo(e) {
    e.preventDefault();

    this.props.onTodoAdd(this.props.input);
  }

  render() {
    return (
      <>
        <form onSubmit={(e) => this.addTodo(e)}>
          <label>Todo:
            <input
              type="text"
              value={this.props.input}
              onChange={(e) => this.props.onInputUpdate(e.target.value)}
            />
          </label>
          <button type="submit">Add</button>
        </form>
        <ul>
          {this.props.todos.map((todo, i) => (
            <li key={`redux-${i}`}>{todo}</li>
          ))}
        </ul>
      </>
    );
  }
}

export default TodoRedux;

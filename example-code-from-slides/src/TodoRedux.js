import React from 'react';

import { Provider, connect } from 'react-redux'
import { createStore } from 'redux'

const reducer = (state = {todos: [], input: ''}, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        todos: [action.input, ...state.todos],
        input: '',
      };
    case 'UPDATE_INPUT':
      return {
        todos: state.todos,
        input: action.input,
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

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

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  onInputUpdate(input) {
    dispatch({type: 'UPDATE_INPUT', input});
  },
  onTodoAdd(input) {
    dispatch({type: 'ADD_TODO', input});
  }
});

const ConnectedTodoRedux = connect(mapStateToProps, mapDispatchToProps)(TodoRedux);

export default () => (
  <Provider store={store}><ConnectedTodoRedux /></Provider>
);

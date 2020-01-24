import React, { useState } from 'react';

const TodoHooks = () => {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  const addTodo = (e) => {
    e.preventDefault();

    setTodos([input, ...todos]);
    setInput('');
  }

  return (
    <>
      <form onSubmit={addTodo}>
        <label>Todo:
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </label>
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo, i) => (
          <li key={`hooks-${i}`}>{todo}</li>
        ))}
      </ul>
    </>
  );
}

export default TodoHooks;

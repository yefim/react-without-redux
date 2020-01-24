export const UPDATE_INPUT = 'UPDATE_INPUT';
export const ADD_TODO = 'ADD_TODO';

export const onInputUpdate = (input) => ({
  type: UPDATE_INPUT,
  input,
});

export const onTodoAdd = (input) => ({
  type: ADD_TODO,
  input,
});

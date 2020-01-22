import { UPDATE_INPUT, ADD_TODO } from './actions';

const INITIAL_STATE = {
  todos: [],
  input: '',
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [action.input, ...state.todos],
        input: '',
      };
    case UPDATE_INPUT:
      return {
        todos: state.todos,
        input: action.input,
      };
    default:
      return state;
  }
}

export default reducer;

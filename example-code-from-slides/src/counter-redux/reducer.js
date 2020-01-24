import { PLUS_ONE } from './actions';

const INITIAL_STATE = {
  counter: 0,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PLUS_ONE:
      return {
        counter: state.counter + 1,
      };
    default:
      return state;
  }
}

export default reducer;

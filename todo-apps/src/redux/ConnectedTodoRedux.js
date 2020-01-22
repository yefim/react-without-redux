import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import { onInputUpdate, onTodoAdd } from './actions';
import TodoRedux from './TodoRedux';

const mapStateToProps = (state) => ({
  todos: state.todos,
  input: state.input,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  onInputUpdate,
  onTodoAdd
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoRedux);

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import { onPlusOne } from './actions';
import CounterRedux from './CounterRedux';

const mapStateToProps = (state) => ({
  counter: state.counter,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  onPlusOne,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CounterRedux);

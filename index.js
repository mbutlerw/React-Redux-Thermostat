import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import { increment, decrement, INITIAL_STATE, setEco, reset } from './core';
import {List, Map} from 'immutable';

// React component
class Counter extends Component {
  render() {
    const { value, onIncreaseClick, onDecreaseClick, onSetEcoClick, eco, onResetClick } = this.props
    return (
      <div>
        <span><h1>{value}</h1></span>
        <button onClick={onIncreaseClick}>Increase</button>
        <button onClick={onDecreaseClick}>Decrease</button>
        <button onClick={onSetEcoClick}>Eco</button>
        <button onClick={onResetClick}>Reset</button>
        <span><h1>ECO: {eco ? "ON" : "OFF"}</h1></span>
      </div>
    )
  }
}

Counter.propTypes = {

  value: PropTypes.number.isRequired,
  onIncreaseClick: PropTypes.func.isRequired,
  onDecreaseClick: PropTypes.func.isRequired

}

// Action
const increaseAction = { type: 'increase' }
const decreaseAction = { type: 'decrease' }
const setEcoAction = { type: 'setEco' }
const resetAction = { type: 'reset' }

// Reducer
function counter(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'increase':
      return increment(state);
    case 'decrease':
      return decrement(state);
    case 'setEco':
      return setEco(state);
    case 'reset':
      return reset(state);
    default:
      return state
  }
}

// Store
const store = createStore(counter, INITIAL_STATE)

// Map Redux state to component props
function mapStateToProps(state) {
  return {
    value: state.get('temp'),
    eco: state.get('eco')
  }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: () => dispatch(increaseAction),
    onDecreaseClick: () => dispatch(decreaseAction),
    onSetEcoClick: () => dispatch(setEcoAction),
    onResetClick: () => dispatch(resetAction)
   }
}

// Connected Component
const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

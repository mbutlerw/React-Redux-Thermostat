import {List, Map} from 'immutable';

export const INITIAL_STATE = Map({temp: 20});


export function increment(state) {
  return state.updateIn(
    ['temp'], temp => temp +1
  );
}

export function decrement(state) {
  if (state.get('temp') === 10) {return state}
  return state.updateIn(
    ['temp'], temp => temp - 1
  );
}

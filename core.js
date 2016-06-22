import {List, Map} from 'immutable';

export const INITIAL_STATE = Map({count: 20});


export function increment(state) {
  return state.updateIn(
    ['count'], count => count +1
  );
}

export function decrement(state) {
  if (state.get('count') === 10) {return state}
  return state.updateIn(
    ['count'], count => count - 1
  );
}

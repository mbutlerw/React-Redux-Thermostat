import {List, Map} from 'immutable';

export const INITIAL_STATE = Map({count: 20});


export function increment(state) {
  return state.updateIn(
    ['count'],
    0,
    count => count + 1
  );
}

export function decrement(state) {
  const count = state.count;
  return { count: count-1};
}

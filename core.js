import {List, Map} from 'immutable';

export function increment(state) {
  const count = state.count;
  return { count: count+1};
}

export function decrement(state) {
  const count = state.count;
  return { count: count-1};
}

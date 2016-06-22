import {List, Map} from 'immutable';

export const INITIAL_STATE = Map({temp: 20,
                                  eco: true});


export function increment(state) {
  if (state.get('temp') === 32) {return state}
  if (state.get('eco') === true && state.get('temp') == 25) {return state}
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

export function setEco(state) {
  const eco = state.get('eco')
  return state.set('eco', !eco);
}

import { createReducer, on } from '@ngrx/store';
import * as actions from './counter.actions';

// export function counterReducer(state: number = 10, action: Action) {
//   switch (action.type) {
//     case increment.type:
//       return state + 1;
//     case decrement.type:
//       return state - 1;
//     default: return state;
//   }
// }

export const initialState = 20;

// tslint:disable-next-line: variable-name
const _counterReducer = createReducer(initialState,
  on(actions.increment, state => state + 1),
  on(actions.decrement, state => state - 1),
  on(actions.multiplicate, (state, props) => state * props.num),
  on(actions.division, (state, { num }) => state / num),
  on(actions.reset, state => 0)
);

export function counterReducer(state, action) {
  return _counterReducer(state, action);
}

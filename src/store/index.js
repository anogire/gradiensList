import { createStore } from 'redux';
import { reducer } from './reducer';

export * from './actions';
export const store = createStore(reducer);
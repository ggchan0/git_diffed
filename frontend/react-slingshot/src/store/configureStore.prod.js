import {createStore, applyMiddleware} from 'redux';
let thunk = require('redux-thunk').default;
import rootReducer from '../reducers';

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, applyMiddleware([thunk]));
}

import {LOAD_USER_1} from '../constants/actionTypes';
//import calculator from '../utils/fuelSavingsCalculator';
//import dateHelper from '../utils/dateHelper';
//import objectAssign from 'object-assign';
import initialState from './initialState';

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
export default function fuelSavingsReducer(state = initialState.users, action) {
  //let newState;

  switch (action.type) {
    case LOAD_USER_1:
      return state;

    default:
      return state;
  }
}
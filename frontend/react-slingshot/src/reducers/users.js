import * as ActionTypes from '../constants/actionTypes';
import initialState from './initialState';
import R from 'ramda';

export default function usersReducer(state = initialState.users, action) {

  switch (action.type) {
    case ActionTypes.SEARCH_USER_1: {
      let updatedUser1 = R.assoc('meta', action.meta, state[0]);
      return R.update(0, updatedUser1, state);
    }

    case ActionTypes.SEARCH_USER_2: {
      let updatedUser2 = R.assoc('meta', action.meta, state[1]);
      return R.update(1, updatedUser2, state);
    }

    default:
      return state;
  }
}

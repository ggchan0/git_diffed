import * as types from '../constants/actionTypes';

export function loadUser1(userName) {
  return {type: types.LOAD_USER_1, userName};
}

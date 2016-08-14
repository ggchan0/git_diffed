import * as types from '../constants/actionTypes';
import { getUser } from '../service.js';
import Promise from 'bluebird';

function load(userData) {
  return {
    type: types.LOAD_USER_1,
    userData
  };
}
export function loadUser1(userName) {
  return (dispatch) =>
  {
    Promise.resolve(getUser(userName)).then(function(response) {
      dispatch(load(response));
    });
  };
}

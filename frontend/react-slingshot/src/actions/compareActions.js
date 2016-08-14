import * as types from '../constants/actionTypes';
import { getUser } from '../service.js';
import Promise from 'bluebird';

function loadUser1(meta) {
  const jsonMeta = JSON.parse(meta);
  return {
    type: types.SEARCH_USER_1,
    meta: jsonMeta
  };
}

function loadUser2(meta) {
  const jsonMeta = JSON.parse(meta);
  return {
    type: types.SEARCH_USER_2,
    meta: jsonMeta
  };
}

export function searchUser1(userName) {
  return function(dispatch)  {
    Promise.resolve(getUser(userName)).then(function(response) {
      dispatch(loadUser1(response));
    });
  };
}

export function searchUser2(userName) {
  return (dispatch) =>
  {
    Promise.resolve(getUser(userName)).then(function(response) {
      dispatch(loadUser2(response));
    });
  };
}

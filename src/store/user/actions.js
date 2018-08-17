import * as types from './actionTypes'

export function setUserName(userName) {
  return dispatch => {
    dispatch({ type: types.USER_LOGIN, username: userName })
  }
}

export function logoutUser() {
  return dispatch => {
    dispatch({ type: types.USER_LOGOUT, username: '' })
  }
}
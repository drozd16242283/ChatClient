import * as types from './actionTypes'
import Immutable from 'seamless-immutable'

const initialState = Immutable({
  userName: ''
})

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.USER_LOGIN:
      return Immutable.set(initialState, 'userName', action.username)
    case types.USER_LOGOUT:
      return Immutable.set(initialState, 'userName', action.username)
    default:
      return state;
  }
}

export function getUserName(state) {
  return state.user.userName
}

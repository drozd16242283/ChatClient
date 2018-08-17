import * as types from './actionTypes'
import Immutable from 'seamless-immutable'

const initialState = {
  messagesList: [],
  loading: false,
  error: null
}

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.FETCH_MESSAGES_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      }
    case types.FETCH_MESSAGES_SUCCESS:
      return {
        ...state,
        loading: false,
        messagesList: action.messages
      }
    case types.FETCH_MESSAGES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      }
    case types.SEND_MESSAGE_SUCCESS:
      const messages = state.messagesList.concat(action.message)
      return {
        ...state,
        messagesList: messages
      }
    case types.MESSAGE_EDITED:
      // return state.messagesList.map(msg => (msg.id === action.indexToUpdate) ? action.editedMessage : msg)
    case types.MESSAGES_DELETE:
      // return state.filter(msg => msg.id !== action.indexToDelete)
    default:
      return state
  }
}

export function getMessagesList(state) {
  return state.messages.messagesList
}
import * as actionTypes from './actionTypes'

const CHAT_API_ENDPOINT = 'http://localhost:8888/chat/message'

export function fetchMessages(skip, take) {
  return dispatch => {
    dispatch(fetchMessagesBegin())
    // TODO: add pagination
    return fetch(`${CHAT_API_ENDPOINT}?skip=${skip}&take=${take}`)
      .then(response => response.json())
      .then(response => dispatch(fetchMessagesSuccess(response)))
      .catch(error => dispatch(fetchMessagesError(error)))
  }
}

export const fetchMessagesBegin = () => ({
  type: actionTypes.FETCH_MESSAGES_BEGIN
})

export const fetchMessagesSuccess = messages => ({
  type: actionTypes.FETCH_MESSAGES_SUCCESS,
  messages: messages
})

export const fetchMessagesError = error => ({
  type: actionTypes.FETCH_MESSAGES_FAILURE,
  error: error
})

export function sendMessage(message) {
  return dispatch => {
    const data = Object.keys(message).map(key => `${encodeURIComponent(key)}=${encodeURIComponent(message[key])}`).join('&')

    return fetch(CHAT_API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      body: data
    })
      .then(response => response.json())
      .then(response => dispatch(sendMessageSuccess(message)))
  }
}

export const sendMessageSuccess = message => ({
  type: actionTypes.SEND_MESSAGE_SUCCESS,
  message: message
})
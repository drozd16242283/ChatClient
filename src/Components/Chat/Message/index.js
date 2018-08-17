import React from 'react'

import './Message.scss'

const Message = ({ username, message }) => (
  <div className="message">
    <div className="username">{username}</div>
    <div className="message-body">{message}</div>
  </div>
)


Message.defaultProps = {
  message: '',
  username: ''
}


export default Message
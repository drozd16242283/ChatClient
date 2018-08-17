import React from 'react'
import sendIcon from './icon.png'

import './MessageInput.scss'

const MessageInput = ({ sendHandler }) => {
  const messageInput = React.createRef()

  const sendMessageHandler = messageText => {
    sendHandler(messageText)
    messageInput.current.value = ''
  }

  return (
    <div className="message-input-wrapper">
      <textarea className="message-input" type="text" name="message"
                placeholder="Введіть повідомлення" ref={messageInput} autoComplete="off"
                onKeyPress={(e) => { (e.key === 'Enter') ? sendMessageHandler(messageInput.current.value) : false }}>
      </textarea>
      <img className="send-message-icon" src={sendIcon}
           onClick={() => { sendMessageHandler(messageInput.current.value) }}
      />
    </div>
  )
}


export default MessageInput
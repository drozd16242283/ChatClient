import React from 'react'
import T from 'prop-types'
import styled from 'styled-components'

import Message from '../Message'


const messagesListStyle = {
  'overflowY': 'scroll',
  'overflowX': 'hidden',
  'flexGrow:': '1',
  'padding': '20px',
  'marginBottom': '50px'
};

const MessagesList = ({ messagesList, loading, error }) => {
  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error! {error.message}</div>;
  }

  const messages = messagesList.map((message, i) => {
    return (
      <Message
        key={i}
        username={message.username}
        message={message.message}
      />
    )
  })

  // I will find a better solution and rewrite this shit :)
  const scrollToBottom = () => {
    setTimeout(() => {
      const messagesList = document.getElementById('messagesList')
      if (messagesList) messagesList.scrollTop = messagesList.clientHeight
    }, 300)
  }

  return (
    <div id="messagesList" style={messagesListStyle}>
      {messages}
      {scrollToBottom()}
    </div>
  )
}

MessagesList.propTypes = {
  messagesList: T.array
}


MessagesList.defaultProps = {
  messagesList: []
}

export default MessagesList
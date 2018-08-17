import React from 'react'
import styled from 'styled-components'

import MessagesList from './MessagesList/Container'
import MessagesInput from './MessageInput/Container'

const ChatWrapper = styled.div`
  width: 80%;
  height: 600px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 50px;
  background-color: #fff;
  position: relative;
`;

const Chat = () => {
  return (
    <ChatWrapper>
      <MessagesList />
      <MessagesInput />
    </ChatWrapper>
  )
}

export default Chat
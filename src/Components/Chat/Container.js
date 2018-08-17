import { connect } from 'react-redux'
import { compose, lifecycle } from 'recompose'
import io from 'socket.io-client';
import { sendMessageSuccess } from "Store/messages/actions";

import ChatRootComponent from './Component'


const enhace = compose(
  connect(),
  lifecycle({
    componentDidMount() {
      const socket = io('http://localhost:8888')
      socket.on('chat:message', message => this.props.dispatch(sendMessageSuccess(message)))
    }
  })
)


export default enhace(ChatRootComponent)
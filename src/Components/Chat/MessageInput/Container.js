import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { sendMessage } from "Store/messages/actions"

import MessageInput from './Component'


const mapDispatchToProps = dispatch => bindActionCreators({
  sendHandler: messageText => (_, getState) => {
    const state = getState()
    const message = {
      username: state.user.userName,
      message: messageText
    }

    dispatch(sendMessage(message))
  }
}, dispatch)


export default connect(undefined, mapDispatchToProps)(MessageInput)
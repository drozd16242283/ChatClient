import { connect } from 'react-redux'
import { compose, lifecycle } from 'recompose'
import { fetchMessages } from "Store/messages/actions";
import { getMessagesList } from "Store/messages/reducers";

import MessagesListComponent from './Component'

const SKIP = 0
const TAKE = 10

const mapStateToProps = state => ({
  messagesList: getMessagesList(state),
  loading: state.messages.loading,
  error: state.messages.error
})

const enhace = compose(
  connect(mapStateToProps, null),
  lifecycle({
    componentDidMount() { this.props.dispatch(fetchMessages(SKIP, TAKE)) }
  })
)

export default enhace(MessagesListComponent)
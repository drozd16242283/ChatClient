import { connect } from 'react-redux'
import { compose, getContext, withProps } from 'recompose'
import TopNavComponent from './Component'
import { getUserName } from 'Store/user/reducers'
import * as userActions from 'Store/user/actions'


const mapStateToProps = state => ({
  user: getUserName(state)
})

const mapDispatchToProps = dispatch => ({
  logoutHandler: () => dispatch(userActions.logoutUser())
})

// export default compose(
//   connect(mapStateToProps, mapDispatchToProps),
//   withProps(props => ({ user: props.user }))
// )(TopNavComponent)

export default connect(mapStateToProps, mapDispatchToProps)(TopNavComponent)
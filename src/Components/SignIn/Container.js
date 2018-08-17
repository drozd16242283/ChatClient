import { connect } from 'react-redux'
import { compose } from 'recompose'
import { withInputs } from 'custom-hoc'
import { withRouter } from 'react-router'
import * as userActions from 'Store/user/actions'

import Component from './Component'


const mapDispatchToProps = dispatch => ({
  handleSubmit: event => dispatch(userActions.setUserName(event))
})

const enhace = compose(
  connect(null, mapDispatchToProps),
  withInputs({
    username: { validate: value => value.length < 20 && value.length > 2 }
  }),
  withRouter
)

export default enhace(Component)
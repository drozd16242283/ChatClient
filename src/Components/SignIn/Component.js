import React from 'react';
import Form from '../layouts/Form/Form'
import { FormHeader, FormHeaderText } from '../layouts/Form/FormHeader'
import SignInButton from '../layouts/Buttons/SignInButton'

import './SignIn.scss'

const SignIn = ({ username, submitReady, onChange, handleSubmit, history }) => {
  let nameInput = React.createRef()

  const submitAndRedirectHandler = username => {
    handleSubmit(username)
    history.push('/chat')
  }

  return (
    <Form onSubmit={() => { submitAndRedirectHandler(nameInput.current.value) }}>
      <FormHeader>
        <FormHeaderText>SignIn to chat</FormHeaderText>
      </FormHeader>

      <div className="form-wrapper">
        <div className="input-wrapper">
          <span>Name: </span>
          <input className="name-input" type="text" name="username"
                 value={username} placeholder="Введіть Імя" ref={nameInput}
                 autoComplete="off" onChange={onChange('username')}
          />
        </div>
        <SignInButton
          primary
          type="submit"
          disabled={!submitReady}
        >
          Sign In
        </SignInButton>
      </div>
    </Form>
  )
}


export default SignIn
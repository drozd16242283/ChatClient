import React from 'react'
import T from 'prop-types'
import styled from 'styled-components'


const FormWrapper = styled.div`
  position: relative;
`;

const Form = styled.form`
  padding: 0;
  display: flex;
  flex-direction: ${props => props.direction};
  
  & > *:not(:last-child) {
    margin-bottom: 40px;
  }
`;

const LoginForm = styled.form`
  position: absolute;
  width: 40%;
  top: 50%;
  left: 50%;
  margin-top: 30%;
  transform: translate(-50%, -70%);
`.withComponent(Form);

const propTypes = {
  direction: T.oneOf([
    'row',
    'column',
    'row-reverse',
    'column-reverse'
  ])
}

const defaultProps = {
  direction: 'column'
}

Form.propTypes = propTypes
Form.defaultProps = defaultProps

export default props => (
  <FormWrapper>
    <LoginForm
      {...props}
      onSubmit={event => {
        event.preventDefault()
        props.onSubmit && props.onSubmit(event)
      }}
    />
  </FormWrapper>
)
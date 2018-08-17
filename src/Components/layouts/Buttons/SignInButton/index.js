import styled from 'styled-components'
import Button from '../Button'


const SignInButton = styled.button`
  margin: 0 0 20px 50%;
  transform: translateX(-50%);
`.withComponent(Button);

SignInButton.defaultProps = {
  type: 'button',
};

export default SignInButton